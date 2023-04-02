import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Navbar from './navbar';
import IconButton from "../../atoms/icon-button";
import {LogoutIcon, ProfilePic, SettingsIcon} from "../../atoms";

export default {
  title: 'Components/Organisms/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <Navbar logoHref={'#'} logoAriaLabel={'Home-Button'} >
    <div>Button 1</div>
    <div>Button 2</div>
    <div>Button 3</div>
  </Navbar>
);

export const defaultNavbarComponent = Template.bind({});


const NavbarWithIconsComponent:  ComponentStory<typeof Navbar> = () => (
    <Navbar logoHref={'#'} logoAriaLabel={'Home-Button'}>
        <button className={'absolute top-0'} onClick={e => (console.log(e))}>
            <ProfilePic altText={'Profilbild'}
                    editLabel={'Bearbeiten'}
                    imageUrl={'https://www.ost.ch/typo3conf/ext/template/Resources/Public/Images/logo-de.svg'}
                    size={'S'}/>
        </button>
        <div className={'pl-xxl'}>
            <IconButton onClick={e => (console.log(e))}  label={'Settings'} variant={'purple'} iconText={'Settings'}>
                <SettingsIcon size={24}/>
            </IconButton>
        </div>
        <div>
            <IconButton onClick={e => (console.log(e))} label={'Logout'} variant={'purple'} iconText={'Logout'}>
                <LogoutIcon  size={24}/>
            </IconButton>
        </div>
    </Navbar>
);
export const NavbarWithLogo = NavbarWithIconsComponent.bind( {});
NavbarWithLogo.args = {
};
