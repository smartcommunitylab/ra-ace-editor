import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditorInput } from './AceEditorInput';

export default {
  title: 'Ra-Ace-Editor/AceEditorInput',
  component: EditorInput,
  argTypes: {
  },
  args: {
    fullWidth: false,
    theme: 'monokai'
  }
} as ComponentMeta<typeof EditorInput>;

const Template: ComponentStory<typeof EditorInput> = (args) => <EditorInput {...args} />;

export const HtmlEditor = Template.bind({});
HtmlEditor.args = {
  value: "Some <strong>html</strong> text",
  mode: 'html',
};

export const JavascriptEditor = Template.bind({});
JavascriptEditor.args = {
  value: `function say(value) {
    return value;
};`,
  mode: 'javascript',
};

export const JsonEditor = Template.bind({});
JsonEditor.args = {
  value: '{"id":0, "body":"text value"}',
  mode: 'json',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...HtmlEditor.args,
  helperText: 'Edit html via editor'
};
