import React from 'react';

import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const editorConfiguration = {
    toolbar: [
        // 'alignment:left',
        // 'alignment:right',
        // 'alignment:center',
        // 'alignment:justify',
        'heading',
        'alignment',
        'blockQuote',
        'bold',
        '|',
        'selectAll',
        'undo',
        'redo',
        '|',
        'indent',
        'outdent',
        'italic',
        'link',
        'linkImage',
        'numberedList',
        'bulletedList',
        '|',
        'imageUpload',
        'mediaEmbed',
        'removeFormat',
        'specialCharacters',
        '|',
        'insertTable',
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'toggleTableCaption',
        'tableCellProperties',
        'tableProperties'
    ],
    image: {
        resizeOptions: [
            {
                name: 'resizeImage:original',
                value: null,
                label: 'Original'
            },
            {
                name: 'resizeImage:40',
                value: '40',
                label: '40%'
            },
            {
                name: 'resizeImage:60',
                value: '60',
                label: '60%'
            },
            {
                name: 'resizeImage:90',
                value: '90',
                label: '90%'
            }
        ],
        toolbar: [
            'resizeImage',
            'imageTextAlternative',
            'imageStyle:side',
            '|',
            'imageStyle:alignLeft',
            'imageStyle:full',
            'imageStyle:alignRight',
            'imageStyle:side',
            'imageCaption',
            'imageTextAlternative',
            'toggleImageCaption',
            'resizeImage',
            'imageResize',
            'imageStyle:inline',
            'imageStyle:alignLeft',
            'imageStyle:alignRight',
            'imageStyle:alignCenter',
            'imageStyle:alignBlockLeft',
            'imageStyle:alignBlockRight',
            'imageStyle:block',
            'imageStyle:side',
            'imageStyle:wrapText',
            'imageStyle:breakText'
        ]
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    },
    language: 'en'
};

export default function Ckeditor() {
    return (
        <div>
            <h2>CKEditor 5 from online builder in React</h2>
            <CKEditor
                editor={Editor}
                config={editorConfiguration}
                data='<p>Hello from CKEditor 5!</p>'
                onReady={(editor) => {
                    console.log('Editor is ready to use!', editor);
                    console.log('items', Array.from(editor.ui.componentFactory.names()));
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </div>
    );
}
