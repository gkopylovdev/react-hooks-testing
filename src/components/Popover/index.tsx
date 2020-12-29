import React from 'react';
import { Transition } from 'react-transition-group';

import styles from './index.module.css';

const TAIL_SIZE = 7;

type Positions = 'top' | 'right' | 'bottom' | 'left';
type Triggers = 'click' | 'hover';

interface IPopoverProps {
  children?: React.ReactNode;
  triggerNode?: React.ReactElement;
  position?: Positions;
  trigger?: Triggers;
}

interface IPopoverContentProps {
  triggerHeight: number;
  triggerWidth: number;
  position: Positions;
  children?: React.ReactNode;
  onClickOutside?: (() => void);
}

const PopoverContent = (props: IPopoverContentProps = {
  triggerHeight: 0,
  triggerWidth: 0,
  position: 'top'
}) => {
  const { triggerHeight, triggerWidth, position, children, onClickOutside } = props;
  const [contentSizes, setContentSizes] = React.useState({ height: 0, width: 0 });
  const contentRef = React.useRef<HTMLDivElement>(null);
  const classes = [styles.popoverContent, styles[position!]].join(' ');
  const getPositionStyle = React.useMemo(() => {
    const { height, width } = contentSizes;

    switch (position) {
      case 'top':
        return {
          bottom: `${triggerHeight + TAIL_SIZE}px`,
          left: `-${(width - triggerWidth)/2}px`,
        };
      case 'right':
        return {
          top: `-${(height - triggerHeight)/2}px`,
          left: `${triggerWidth + TAIL_SIZE}px`,
        };
      case 'bottom':
        return {
          top: `${triggerHeight + TAIL_SIZE}px`,
          left: `-${(width - triggerWidth)/2}px`,
        };
      case 'left':
        return {
          top: `-${(height - triggerHeight)/2}px`,
          right: `${triggerWidth + TAIL_SIZE}px`,
        };
    }
  }, [position, triggerWidth, triggerHeight, contentSizes]);

  React.useLayoutEffect(() => {
    if (contentRef.current) {
      const contentRect = contentRef.current.getBoundingClientRect();

      setContentSizes({ height: contentRect.height, width: contentRect.width });
    }
  }, [children, contentRef]);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        onClickOutside && onClickOutside()
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [contentRef, onClickOutside]);

  return (
    <div className={classes} style={getPositionStyle} ref={contentRef}>
      {children}
    </div>
  );
};

const Popover = (props: IPopoverProps = {
  position: 'top',
  trigger: 'click'
}) => {
  const { triggerNode, trigger, position, children } = props;
  const [shown, setShown] = React.useState(false);
  const [triggerSizes, setTriggerSizes] = React.useState({ height: 0, width: 0 });
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const onToggle = (e: MouseEvent):void => {
    e.stopPropagation();

    setShown(!shown);
  };

  const onShow = ():void => {
    setShown(true);
  };

  const onHide = ():void => {
    setShown(false);
  };

  React.useEffect(() => {
    if (triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();

      setTriggerSizes({ height: triggerRect.height, width: triggerRect.width });
    }
  }, [triggerNode]);

  return (
    <div className={styles.popover} ref={triggerRef}>
      { triggerNode && React.cloneElement(triggerNode, {
        onClick: trigger === 'click' ? onToggle : null,
        onMouseOver: trigger === 'hover' ? onShow : null,
        onMouseOut: trigger === 'hover' ? onHide : null,
      }) }

      <Transition in={shown} timeout={500} mountOnEnter unmountOnExit>
        {state => (
          <div className={[styles.transitionHolder, styles[state]].join(' ')}>
            <PopoverContent
              triggerHeight={triggerSizes.height}
              triggerWidth={triggerSizes.width}
              position={position!}
              onClickOutside={() => { setShown(false) }}
            >
              {children}
            </PopoverContent>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Popover;