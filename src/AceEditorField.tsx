import { PublicFieldProps, InjectedFieldProps, useRecordContext } from 'react-admin';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-drools";
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/mode-text";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import { Fragment } from 'react';
import { get } from 'lodash';


export const AceEditorField = (props: AceFieldProps) => {
    const {
        mode = "html",
        theme = "monokai",
        label,
        fullWidth = false,
        resource,
        source,
        ...rest
    } = props;


    const record = useRecordContext(props);
    const value = get(record, source);



    //TODO let users customize options
    const aceOptions = {
        readOnly: true, useWorker: false, showPrintMargin: false
    }


    return (
        <Fragment>
            <AceEditor
                value={value}
                mode={mode}
                theme={theme}
                wrapEnabled width={fullWidth ? '100%' : undefined}
                setOptions={aceOptions}
            />
        </Fragment>


    );
};


export interface AceFieldProps extends PublicFieldProps, InjectedFieldProps {
    source: string;
    mode?: 'java' | 'javascript' | 'markdown' | 'drools' | 'html' | 'python' | 'json' | 'sql' | 'typescript' | 'css' | 'yaml' | 'text';
    fullWidth?: boolean;
    theme?: 'github' | 'monokai' | 'solarized_dark' | 'solarized_light';
}