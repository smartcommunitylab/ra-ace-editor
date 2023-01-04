import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditorField } from './AceEditorField';

export default {
  title: 'Ra-Ace-Editor/AceEditorField',
  component: EditorField,
  argTypes: {
  },
  args: {
    fullWidth: false,
    theme: 'monokai'
  }
} as ComponentMeta<typeof EditorField>;

const Template: ComponentStory<typeof EditorField> = (args) => <EditorField {...args} />;

export const HtmlField = Template.bind({});
HtmlField.args = {
  value: "Some <strong>html</strong> text",
  mode: 'html',
};

export const JavascriptField = Template.bind({});
JavascriptField.args = {
  value: `function say(value) {
    return value;
};`,
  mode: 'javascript',
};

export const JsonField = Template.bind({});
JsonField.args = {
  value: '{"id":0, "body":"text value"}',
  mode: 'json',
};


export const WithLightTheme = Template.bind({});
WithLightTheme.args = {
  ...JavascriptField.args,
  theme: 'github'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...JavascriptField.args,
  fullWidth: true
};

