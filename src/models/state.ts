import * as vscode from 'vscode';
import { getExtension } from './';

export class State {
  private static _extContext: vscode.ExtensionContext;
  private static _externalConfigColor: string | undefined;

  public static get extensionContext(): vscode.ExtensionContext {
    return this._extContext;
  }

  public static set extensionContext(ec: vscode.ExtensionContext) {
    this._extContext = ec;
  }

  public static get externalConfigColor(): string | undefined {
    return this._externalConfigColor;
  }

  public static set externalConfigColor(color: string | undefined) {
    this._externalConfigColor = color;
  }
}

export function getExtensionVersion() {
  const extension = getExtension();
  const version: string = extension ? extension.packageJSON.version : '';
  return version;
}
