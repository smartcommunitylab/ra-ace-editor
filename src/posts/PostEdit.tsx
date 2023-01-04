
import { Edit, NullableBooleanInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { AceEditorInput } from '../AceEditorInput';

const transform = (data: any) => {
    console.log(data);
    return data;
}


export const PostEdit = () => (
    <Edit transform={transform}>
        <SimpleForm>
            <TextInput source="userId" />
            <TextInput source="id" />
            <TextInput source="title" required />
            <AceEditorInput source="body" fullWidth useWorker helperText="Edit via ace editor" />
        </SimpleForm>
    </Edit >
);