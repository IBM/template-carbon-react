import React from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent
} from '@carbon/react';
import { UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

const AppHeader = () => (
  <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderName element={Link} to="/" prefix="IBM">
          Carbon React UI
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="end">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
);

export default AppHeader;
