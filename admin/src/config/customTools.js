import PluginId from '../pluginId'

import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import Columns from '@calumk/editorjs-columns'
import EditorJS from '@editorjs/editorjs';
import ColorPlugin from 'editorjs-text-color-plugin';
let customToolsCol = {
  raw: Raw,
  header: Header,
  delimiter: Delimiter,
};

let customTools = {
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
        colorCollections: [
          '#AA881E',
          '#003239',
          '#333',
          '#666',
          '#999',
          '#000', 
          '#FFF'
        ],
        defaultColor: '#000',
        type: 'text', 
        customPicker: true // add a button to allow selecting any colour  
    }     
  },
  embed: {
    class: Embed,
    config: {
      services: {
        instagram: true,
        youtube: true,
        twitter: true,
      }
    }
  },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  /* warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: 'Title',
      messagePlaceholder: 'Message',
    },
  }, */
  code: Code,
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: 'Quote',
      captionPlaceholder: 'Quote`s author',
    },
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
}

customTools.columns = {
    class: Columns,
    config : {
      tools : { ... customTools }, 
      EditorJsLibrary: EditorJS
    }
}

export default customTools
