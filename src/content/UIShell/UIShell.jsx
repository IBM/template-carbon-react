import React from "react";
import {
    HeaderContainer, Header, SkipToContent, HeaderMenuButton, HeaderName,
    HeaderNavigation, HeaderMenu, HeaderMenuItem, HeaderGlobalBar,
    HeaderGlobalAction, SideNav, SideNavItems, Content,
    SideNavMenu, SideNavMenuItem, Theme
} from '@carbon/react';
import {
    Notification,
    Search,
    Switcher,
    Fade,
} from '@carbon/react/icons';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

import ErrorBoundary from "../../components/ErrorBoundary";
import LandingPage from '../LandingPage';
import NotFound from '../../components/NotFound';


class UIShell extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        activeItem: `/${window.location.pathname.split('/')[1] ?? ''}`
      };
    }

    render() {
        return (
            <BrowserRouter>
                <Theme theme='g90'>
                    <HeaderContainer
                        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                            <div>
                                <Header aria-label="IBM Platform Name">
                                    <SkipToContent />
                                    <HeaderMenuButton
                                        aria-label="Open menu"
                                        onClick={onClickSideNavExpand}
                                        isActive={isSideNavExpanded}
                                    />
                                    <HeaderName href="#" prefix="Carbon">
                                        Template
                                    </HeaderName>
                                    <HeaderNavigation aria-label="Carbon React App">
                                        <HeaderMenuItem href="#">Contributing</HeaderMenuItem>
                                        <HeaderMenuItem href="#">Contact</HeaderMenuItem>
                                        <HeaderMenu aria-label="How To" menuLinkName="How To">
                                            <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
                                            <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
                                            <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
                                        </HeaderMenu>
                                    </HeaderNavigation>
                                    <HeaderGlobalBar>
                                        <HeaderGlobalAction
                                            aria-label="Search"
                                            tooltipAlignment="end">
                                            <Search size={20} />
                                        </HeaderGlobalAction>
                                        <HeaderGlobalAction
                                            aria-label="Notifications"
                                            tooltipAlignment="end">
                                            <Notification size={20} />
                                        </HeaderGlobalAction>
                                        <HeaderGlobalAction
                                            aria-label="App Switcher"
                                            tooltipAlignment="end">
                                            <Switcher size={20} />
                                        </HeaderGlobalAction>
                                    </HeaderGlobalBar>
                                    <ErrorBoundary>
                                        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                                            <SideNavItems>
                                                <SideNavMenuItem element={Link} to='/'
                                                    isActive={this.state.activeItem === '/'}
                                                    onClick={() => { this.setState({ activeItem: '/' }) }}>
                                                    Overview
                                                </SideNavMenuItem>
                                                <SideNavMenu renderIcon={Fade} title="Inventory" defaultExpanded>
                                                    <SideNavMenuItem element={Link} to='/inventory/items'
                                                        isActive={this.state.activeItem === '/inventory/items'}
                                                        onClick={() => { this.setState({ activeItem: '/inventory/items' }) }}>
                                                        Items
                                                    </SideNavMenuItem>
                                                </SideNavMenu>
                                                <SideNavMenu renderIcon={Fade} title="Management">
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                </SideNavMenu>
                                                <SideNavMenu
                                                    renderIcon={Fade}
                                                    title="Docs">
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                    <SideNavMenuItem href="#">
                                                        Link
                                                    </SideNavMenuItem>
                                                </SideNavMenu>
                                            </SideNavItems>
                                        </SideNav>
                                    </ErrorBoundary>
                                </Header>
                            </div>
                        )}
                    />
                </Theme>
                <Content className='content'>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Content>
            </BrowserRouter>
        );
    }
}

export default UIShell;
