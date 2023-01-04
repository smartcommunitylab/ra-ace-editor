import React from 'react';
import { AdminContext, SimpleForm } from 'react-admin';
import { Card, CardContent } from '@mui/material';

import { AceEditorInput } from '../AceEditorInput';

const Wrapper = ({ children, ...props }: any) => (
    <AdminContext {...props}>{children}</AdminContext>
);

interface EditorProps {
    value?: string,
    mode?: 'java' | 'javascript' | 'markdown' | 'drools' | 'html' | 'python' | 'json' | 'sql' | 'typescript' | 'css' | 'yaml' | 'text';
    fullWidth?: boolean,
    helperText?: string
    theme?: 'github' | 'monokai' | 'solarized_dark' | 'solarized_light';
};

export const EditorInput = ({
    value,
    mode, fullWidth, theme, helperText,
    ...props
}: EditorProps) => {
    const aceProps = { mode, theme, fullWidth, helperText };
    const record = { id: 0, body: value };
    return (
        <Wrapper>
            <Card>
                <CardContent>
                    <SimpleForm resource="posts" record={record}>
                        <AceEditorInput label={mode} source="body" {...aceProps} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Wrapper>
    );
};
