import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import Popover from '@components/Popover';

import { IUser } from '@lib/interfaces';

import styles from './index.module.css';

const User = (
  props: { user: IUser }
) => {
  const { user } = props;
  const userEmailHref = `mailto:${user.email}`;

  return (
    <div className={styles.root}>
      <div className={styles.contactInfo}>
        <div className={styles.name}>
          { user.name }

          <a className={styles.externalLink} href={`https://${user.website}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>

        <a className={styles.email} href={userEmailHref}>{ user.email }</a>
      </div>

      <div className={styles.actions}>
        <Popover
          trigger="click"
          position="right"
          triggerNode={<div className={styles.action}><FontAwesomeIcon icon={faEllipsisH} /></div>}
        >
          <div >123312312</div>
        </Popover>
      </div>
    </div>
  );
};

export default User;