// auto-generated from index.js via build.js, do not edit directly
CodeMirrorEditor = (function (require, module) {
  'use strict';
  var React = require('react');
  var isMobile = require('./utils/isMobile')();
  var CodeMirror;

  if (!isMobile) {
    CodeMirror = require('codemirror');
  }

  var CodeMirrorEditor = React.createClass({

    getInitialState: function() {
      return { isControlled: this.props.value != null };
    },

    propTypes: {
      className: React.PropTypes.string,
      config: React.PropTypes.object,
      defaultValue: React.PropTypes.string,
      onChange: React.PropTypes.func,
      style: React.PropTypes.object,
      value: React.PropTypes.string,
    },

    componentDidMount: function() {
      var isTextArea = this.props.forceTextArea || isMobile;
      if (!isTextArea) {
        this._editor =
          CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), this.props);
        this._editor.on('change', this._handleChange);
      }
    },

    componentDidUpdate: function() {
      var oldVal = this.props.value;
      if (this._editor && oldVal != null && this._editor.getValue() !== oldVal) {
        this._editor.setValue(this.props.value);
      }
    },

    _handleChange: function() {
      if (this._editor) {
        var value = this._editor.getValue();

        if (value !== this.props.value) {
          this.props.onChange && this.props.onChange({target: {value: value}});

          if (this._editor.getValue() !== this.props.value) {
            if (this.state.isControlled) {
              this._editor.setValue(this.props.value);
            } else {
              this.props.value = value;
            }
          }
        }
      }
    },

    render: function() {
      var editor = React.createElement('textarea', {
        ref: 'editor',
        value: this.props.value,
        readOnly: this.props.readOnly,
        defaultValue: this.props.defaultValue,
        onChange: this.props.onChange,
        style: this.props.textAreaStyle,
        className: this.props.textAreaClassName || this.props.textAreaClass
      });

      return React.createElement('div', {
        style: this.props.style,
        className: this.props.className
      }, editor);
    }
  });

  module.exports = CodeMirrorEditor;

  // adapted from:
  // https://github.com/facebook/react/blob/master/docs/_js/live_editor.js#L16

  // also used as an example:
  // https://github.com/facebook/react/blob/master/src/browser/ui/dom/components/ReactDOMInput.js


  return module.exports;
}(function (id) {
  if (id === "react") return React;
  else if (id === "codemirror") return CodeMirror;
  else throw new Error("Unexpected require of " + id);
}, {exports: {}}));