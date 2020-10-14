/*
//EXPORT FROM A MODULE

export const namedExport = function() {}
export const someSecretkey = '%^&^&^*(JHGG';

function functionA() {}
class SomeClass {}
interface SomeInterface {}
export {functionA,SomeClass,SomeInterface};

function defaultExport(){}
export default defaultExport;

// IMPORT FROM A MODULE

import { namedExport } from '@some/module';
import defaultExport from './some/other/module';

import defaultExport, { namedExport } from './some/other/module';

import defaultExport as defaultExportAlias, { namedExport as namedExportAlias } from './some/another/module';

import * as aliasedExport from './relative-path/to-module'
*/