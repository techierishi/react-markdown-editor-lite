import Editor from 'editor';
import * as React from 'react';

export type UploadFunc = ((file: File) => Promise<string>) | ((file: File, callback: (url: string) => void) => void);

export interface EditorConfig {
  theme?: string;
  name?: string;
  view?: {
    menu: boolean;
    md: boolean;
    html: boolean;
    fullScreen: boolean;
  };
  htmlClass?: string;
  markdownClass?: string;
  logger?: {
    interval: number;
  };
  imageUrl?: string;
  imageAccept?: string;
  linkUrl?: string;
  table?: {
    maxRow: number;
    maxCol: number;
  };
  syncScrollMode?: string[];
  allowPasteImage?: boolean;
  onBeforeClear?: (this: Editor) => Promise<boolean> | boolean;
  onImageUpload?: UploadFunc;
  onCustomImageUpload?: (event: any) => Promise<{ url: string }>;
}

export interface Selection {
  start: number;
  end: number;
  text: string;
}

export const initialSelection: Selection = {
  start: 0,
  end: 0,
  text: '',
};

export type KeyboardEventCallback = (e: React.KeyboardEvent<HTMLDivElement>) => void;
export interface KeyboardEventListener {
  key?: string;
  keyCode: number;
  withKey?: ('ctrlKey' | 'shiftKey' | 'altKey' | 'metaKey')[];
  callback: KeyboardEventCallback;
}