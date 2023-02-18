import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Navbar from './navbar';

export default {
  title: 'Components/Organisms/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <Navbar>
    <div>Button 1</div>
    <div>Button 2</div>
    <div>Button 3</div>
  </Navbar>
);

export const NavbarComponent = Template.bind({});
