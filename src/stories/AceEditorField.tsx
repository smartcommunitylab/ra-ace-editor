import React from 'react';
import { AdminContext, ResourceContextProvider, SimpleForm, SimpleShowLayout } from 'react-admin';
import { Card, CardContent } from '@mui/material';

import { AceEditorField } from '../AceEditorField';

const Wrapper = ({ record, children, ...props }: any) => (
    <AdminContext {...props}>
        <ResourceContextProvider value="posts">
            <Card>
                <CardContent>
                    <SimpleShowLayout record={record}>
                        {children}
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </ResourceContextProvider>
    </AdminContext>
);

interface EditorProps {
    value?: string,
    mode?: 'java' | 'javascript' | 'markdown' | 'drools' | 'html' | 'python' | 'json' | 'sql' | 'typescript' | 'css' | 'yaml' | 'text';
    fullWidth?: boolean,
    helperText?: string
    theme?: 'github' | 'monokai' | 'solarized_dark' | 'solarized_light';
};

export const EditorField = ({
    value,
    mode, fullWidth, theme, helperText,
    ...props
}: EditorProps) => {
    const aceProps = { mode, theme, fullWidth, helperText };
    const record = { id: 0, body: value };
    return (
        <Wrapper record={record}>
            <AceEditorField label={mode} source="body" {...aceProps} />
        </Wrapper>
    );
    // return (
    //     <Wrapper>
    //         <Card>
    //             <CardContent>
    //                 <SimpleForm resource="posts" record={record}>
    //                     <AceEditorField label={mode} source="body" {...aceProps} />
    //                 </SimpleForm>
    //             </CardContent>
    //         </Card>
    //     </Wrapper>
    // );
};
