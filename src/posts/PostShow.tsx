
import { ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { AceEditorField } from '../AceEditorField';

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="userId" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <AceEditorField source="body" fullWidth />

        </SimpleShowLayout>
    </Show>
);