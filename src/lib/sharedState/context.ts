import { createContext } from 'react';

import { defaultSharedState } from './reducer';

export const SharedContext = createContext(defaultSharedState);