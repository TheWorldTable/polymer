/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/mixins/gesture-event-listeners.html
 */

/// <reference path="../utils/boot.d.ts" />
/// <reference path="../utils/mixin.d.ts" />
/// <reference path="../utils/gestures.d.ts" />

declare namespace Polymer {

  /**
   * Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes.
   *
   * The API is designed to be compatible with override points implemented
   * in `Polymer.TemplateStamp` such that declarative event listeners in
   * templates will support gesture events when this mixin is applied along with
   * `Polymer.TemplateStamp`.
   */
  function GestureEventListeners<T extends new(...args: any[]) => {}>(base: T): {
    new(...args: any[]): {
      _addEventListenerToNode(node: any, eventName: any, handler: any): any;
      _removeEventListenerFromNode(node: any, eventName: any, handler: any): any;
    }
  } & T
}
