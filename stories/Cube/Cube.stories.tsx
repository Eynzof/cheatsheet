// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Cube from './Cube';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Cube',
    component:  Cube,
} as ComponentMeta<typeof Cube>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof  Cube> = (args) => <Cube {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    /*👇 The args you need here will depend on your component */
};