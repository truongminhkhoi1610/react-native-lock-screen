
import React, { Component } from "react";
import { StyleSheet, ViewPropTypes, View, Text, Image, ImageBackground } from "react-native";
import PropTypes from "prop-types";

import Toast, { DURATION } from 'react-native-easy-toast'
import SvgUri from "react-native-svg-uri";

import { HeaderFragment } from './HeaderFragment'
import { PinFragment } from './PinFragment'
import { PatternFragment } from "./PatternFragment";

import style from './RNLockScreen.style'

let watermark = '<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1301.25 32.88"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_2-2" data-name="Layer 2"><g id="Layer_1-2-2" data-name="Layer 1-2"><g id="Layer_2-2-2" data-name="Layer 2-2"><g id="Layer_1-2-2-2" data-name="Layer 1-2-2"><path d="M1201.21,23.63c-6.16.85-10.07,1.37-12.7,1.69-6.71.78-14.67,1.71-25.17,2.38-8.91.61-17.88.88-26.85.8a342.34,342.34,0,0,1-35.24-2.39c-8.76-.93-14.94-1.84-16.78-2.12-3.17-.47-6.19-1-11.09-1.86l.18-.38a204.91,204.91,0,0,1,25.95-6.4c10.41-1.9,21.6-3.95,36.76-4,16.08-.05,27.93,2.29,36.74,4a154.44,154.44,0,0,1,28.11,8Z" fill="#9dcae9"/><path d="M806.92,8.41a251.43,251.43,0,0,1,40-3.78,267,267,0,0,1,38.4,2.23,208.65,208.65,0,0,1,34.61,7.55q5.58,1.77,10.79,3.9-2.78.84-5.71,1.47c-10,2.16-18.85,2.27-28.53,2.39a147,147,0,0,1-20.14-.8,129.08,129.08,0,0,1-16.78-3.18c-10.07-2.47-10.3-3.46-18.46-5.56a107.41,107.41,0,0,0-26.85-4H812c-1.68,0-3.37,0-5,.17Z" fill="#9dcae9"/><path d="M564.17,23c-1.29-.17-2.13-.3-4.75-.75l.23-.49a223.2,223.2,0,0,1,24.67-5.82,173.05,173.05,0,0,1,58.56-1.44c5.25.7,10.42,1.59,15.47,2.68-4-.07-8,0-11.95.26-5.09.31-10.14.84-15.1,1.59-3.36.48-4.58.77-13.43,2.38-8.22,1.5-12.34,2.26-13.43,2.39a140.68,140.68,0,0,1-21.82.79A172.13,172.13,0,0,1,564.17,23Z" fill="#9dcae9"/><path d="M339.27,20.63c-3.07-.12-6.15-.12-9.21,0v-.17a129.93,129.93,0,0,1,21.82-8c8.76-2.38,18.19-4.94,30.95-5,13.54-.06,23.5,2.86,30.95,5a101,101,0,0,1,23.66,10v.14q-6.25,1.19-12.67,2A159.46,159.46,0,0,1,408,26.19a175.56,175.56,0,0,1-21.82-.79c-1.21-.1-5.86-.6-15.1-1.59C361,22.72,358.62,22.49,356,22.22,346.27,21.17,341.39,20.63,339.27,20.63Z" fill="#9dcae9"/><path d="M135.35,17a182.87,182.87,0,0,1,33.57-2.5,189.63,189.63,0,0,1,31.77,3.33,147.68,147.68,0,0,1,28.25,8.33q4.54,1.88,8.66,4.07c-3.26,0-6.26-.11-9.06-.17-3.93-.1-11.13-.3-20.14-.8-5-.28-12.37-.69-21.82-1.59q-10.18-.84-20.14-2.38a151.87,151.87,0,0,1-21.82-4.77c-4.5-1.4-5.24-2-9.35-3.4h0Z" fill="#9dcae9"/><path d="M41,17.82c9.06-.35,18.16-.35,27.22,0l.27.24L64,19.78c-9.13,3.59-9,4-13.43,5.57a84.31,84.31,0,0,1-18.46,4.77,100.52,100.52,0,0,1-18.46.79A94,94,0,0,1,.25,29.32V21.57h.84A356.27,356.27,0,0,1,41,17.82Z" fill="#9dcae9"/><path d="M1300.95,32.88H237.73v-2.5l-.17-.09c5.62.07,12,.06,19.47-.17,10.94-.36,16.41-.53,23.5-1.59,2.25-.34,2.74-.44,16.78-3.18,17.25-3.37,18.86-3.65,21.82-4,3.61-.41,7.26-.69,10.93-.82,3.07-.12,6.15-.12,9.21,0,2.11.09,7,.59,16.78,1.59,2.67.27,5,.5,15.1,1.59,9.25,1,13.9,1.49,15.1,1.59a175.56,175.56,0,0,0,21.82.79,159.46,159.46,0,0,0,16.78-1.59c5-.66,9.2-1.37,12.67-2,2.2-.41,4.13-.8,5.79-1.15q8.57-1.73,16.78-4c7.89-2.07,7.57-2.28,11.75-3.18a100.17,100.17,0,0,1,18.46-2.39,114,114,0,0,1,21.82,1.59c6.71,1,6.38,1.4,20.14,4,1.51.28,1.07.19,13.43,2.38l13.71,2.43c2.62.45,3.46.58,4.75.75a172.13,172.13,0,0,0,18.46,1.59,140.68,140.68,0,0,0,21.82-.79c1.09-.13,5.2-.89,13.43-2.39,8.84-1.61,10.07-1.9,13.43-2.38,5-.75,10-1.28,15.1-1.59,4-.24,8-.33,11.95-.26a138,138,0,0,1,14.9,1c10.84,1.39,10.72,2.83,21.82,4,6.12.51,12.29.77,18.46.79,11,.24,16.5.36,21.82,0a155.8,155.8,0,0,0,25.17-4c5.57-1.25,10.76-2.67,18.46-4.77,8.51-2.33,8.29-2.45,11.75-3.18A107.57,107.57,0,0,1,807,8.72c2.06-.13,3.74-.16,5-.17h2.27a107.41,107.41,0,0,1,26.85,4c8.16,2.1,8.39,3.09,18.46,5.56a129.08,129.08,0,0,0,16.78,3.18,147,147,0,0,0,20.14.8c9.68-.12,18.56-.23,28.53-2.39q2.92-.63,5.71-1.47a110.09,110.09,0,0,0,11.08-4.09c10.34-4.23,10-5.7,18.46-8.75A77,77,0,0,1,980.44.62C982.8.4,985.19.3,987.57.3A88.64,88.64,0,0,1,1009,3c4.06,1.17,8,2.51,11.75,4,3.46,1.26,6.09,2.31,7.13,2.73,3.36,1.36,3.71,1.58,5.91,2.46a123.87,123.87,0,0,0,12.13,4c1.91.55,5.45,1.53,10.07,2.57,1.68.4,4.43,1,13.43,2.58l4,.72c4.9.87,7.92,1.39,11.09,1.86,1.85.28,8,1.19,16.78,2.12a342.34,342.34,0,0,0,35.24,2.39c9,.08,17.94-.19,26.85-.8,10.51-.67,18.46-1.6,25.17-2.38,2.7-.32,6.55-.84,12.7-1.69L1212,22.1c18.46-2.58,20.39-2.9,25.17-3.18a147.63,147.63,0,0,1,21.82,0c8.86.71,11.35,1.84,21.82,3.18,6.64.84,13.37,1.37,20.14,1.59Z" fill="#fff"/><path d="M237.73,32.88H.25V29.32a94,94,0,0,0,13.43,1.59,100.52,100.52,0,0,0,18.46-.79A84.31,84.31,0,0,0,50.6,25.35c4.38-1.6,4.3-2,13.43-5.57L68.49,18c1.14-.43,2.47-.93,3.93-1.46a117.85,117.85,0,0,1,11.75-4A74.87,74.87,0,0,1,99.27,11a91.26,91.26,0,0,1,16.78.79c5,.74,8.39,1.83,15.1,4,1.68.54,3,1,4.08,1.36h0c4.11,1.44,4.85,2,9.35,3.4A151.87,151.87,0,0,0,166.4,25.3q9.95,1.54,20.14,2.38c9.45.9,16.78,1.31,21.82,1.59,9,.5,16.21.7,20.14.8,2.8.06,5.81.13,9.06.17l.17.09Z" fill="#fff"/><path d="M1.09,21.57A356.27,356.27,0,0,1,41,17.82c9.06-.35,18.16-.35,27.22,0" fill="none" stroke="#9dcae9" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/><path d="M135.35,17a182.87,182.87,0,0,1,33.57-2.5,189.63,189.63,0,0,1,31.77,3.33,147.68,147.68,0,0,1,28.25,8.33q4.54,1.88,8.66,4.07l.17.09" fill="none" stroke="#9dcae9" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/><path d="M330,20.38a129.93,129.93,0,0,1,21.82-8c8.76-2.38,18.19-4.94,30.95-5,13.54-.06,23.5,2.86,30.95,5a101,101,0,0,1,23.66,10" fill="none" stroke="#9dcae9" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/><path d="M559.65,21.72a223.2,223.2,0,0,1,24.67-5.82,173.05,173.05,0,0,1,58.56-1.44c5.25.7,10.42,1.59,15.47,2.68l.64.13" fill="none" stroke="#9dcae9" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/><path d="M806.92,8.41a251.43,251.43,0,0,1,40-3.78,267,267,0,0,1,38.4,2.23,208.65,208.65,0,0,1,34.61,7.55q5.58,1.77,10.79,3.9l.17.07" fill="none" stroke="#9dcae9" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/><path d="M1073.54,21.78a204.91,204.91,0,0,1,25.95-6.4c10.41-1.9,21.6-3.95,36.76-4,16.08-.05,27.93,2.29,36.74,4a154.44,154.44,0,0,1,28.11,8" fill="none" stroke="#9dcae9" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/><path d="M.25,29.32a94,94,0,0,0,13.43,1.59,100.52,100.52,0,0,0,18.46-.79A84.31,84.31,0,0,0,50.6,25.35c4.38-1.6,4.3-2,13.43-5.57L68.49,18c1.14-.43,2.47-.93,3.93-1.46a117.85,117.85,0,0,1,11.75-4A74.87,74.87,0,0,1,99.27,11a91.26,91.26,0,0,1,16.78.79c5,.74,8.39,1.83,15.1,4,1.68.54,3,1,4.08,1.36h0c4.11,1.44,4.85,2,9.35,3.4A151.87,151.87,0,0,0,166.4,25.3q9.95,1.54,20.14,2.38c9.45.9,16.78,1.31,21.82,1.59,9,.5,16.21.7,20.14.8,2.8.06,5.81.13,9.06.17,5.62.07,12,.06,19.47-.17,10.94-.36,16.41-.53,23.5-1.59,2.25-.34,2.74-.44,16.78-3.18,17.25-3.37,18.86-3.65,21.82-4,3.61-.41,7.26-.69,10.93-.82,3.07-.12,6.15-.12,9.21,0,2.11.09,7,.59,16.78,1.59,2.67.27,5,.5,15.1,1.59,9.25,1,13.9,1.49,15.1,1.59a175.56,175.56,0,0,0,21.82.79,159.46,159.46,0,0,0,16.78-1.59c5-.66,9.2-1.37,12.67-2,2.2-.41,4.13-.8,5.79-1.15q8.57-1.73,16.78-4c7.89-2.07,7.57-2.28,11.75-3.18a100.17,100.17,0,0,1,18.46-2.39,114,114,0,0,1,21.82,1.59c6.71,1,6.38,1.4,20.14,4,1.51.28,1.07.19,13.43,2.38l13.71,2.43c2.62.45,3.46.58,4.75.75a172.13,172.13,0,0,0,18.46,1.59,140.68,140.68,0,0,0,21.82-.79c1.09-.13,5.2-.89,13.43-2.39,8.84-1.61,10.07-1.9,13.43-2.38,5-.75,10-1.28,15.1-1.59,4-.24,8-.33,11.95-.26a138,138,0,0,1,14.9,1c10.84,1.39,10.72,2.83,21.82,4,6.12.51,12.29.77,18.46.79,11,.24,16.5.36,21.82,0a155.8,155.8,0,0,0,25.17-4c5.57-1.25,10.76-2.67,18.46-4.77,8.51-2.33,8.29-2.45,11.75-3.18A107.57,107.57,0,0,1,807,8.67c2.06-.13,3.74-.16,5-.17h2.27a107.41,107.41,0,0,1,26.85,4c8.16,2.1,8.39,3.09,18.46,5.56a129.08,129.08,0,0,0,16.78,3.18,147,147,0,0,0,20.14.8c9.68-.12,18.56-.23,28.53-2.39q2.92-.63,5.71-1.47a110.09,110.09,0,0,0,11.08-4.09c10.34-4.23,10-5.7,18.46-8.75A77,77,0,0,1,980.44.57c2.36-.22,4.74-.32,7.13-.32A88.5,88.5,0,0,1,1009,3c4.06,1.17,8,2.51,11.75,4,3.46,1.26,6.09,2.31,7.13,2.73,3.36,1.36,3.71,1.58,5.91,2.46a123.87,123.87,0,0,0,12.13,4c1.91.55,5.45,1.53,10.07,2.57,1.68.4,4.43,1,13.43,2.58l4,.72c4.9.87,7.92,1.39,11.09,1.86,1.85.28,8,1.19,16.78,2.12a342.34,342.34,0,0,0,35.24,2.39c9,.08,17.94-.19,26.85-.8,10.51-.67,18.46-1.6,25.17-2.38,2.7-.32,6.55-.84,12.7-1.69L1212,22c18.46-2.58,20.39-2.9,25.17-3.18a147.63,147.63,0,0,1,21.82,0c8.86.71,11.35,1.84,21.82,3.18,6.64.84,13.37,1.37,20.14,1.59" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/></g></g></g></g></g></g></svg>'

class RNLockScreen extends Component {
  static Mode = {
    Capture: 0,
    Verify: 1
  };

  static Type = {
    Pin: 0,
    Pattern: 1
  };

  static propTypes = {
    ...ViewPropTypes,

    mode: PropTypes.number,
    type: PropTypes.number,
    lock: PropTypes.string,
    lockLimit: PropTypes.number,
    clearLockOnError: PropTypes.bool,

    backgroundImage: PropTypes.number,

    defaultState: PropTypes.object,
    reenterState: PropTypes.object,
    successState: PropTypes.object,
    errorState: PropTypes.object,

    patternProps: PropTypes.object,
    pinProps: PropTypes.object,

    renderHeaderFragment: PropTypes.func,
    renderSeparator: PropTypes.func,
    renderLockFragment: PropTypes.func,

    headerFragmentProps: PropTypes.object,
    lockFragmentProps: PropTypes.object
  };

  static defaultProps = {
    type: 0,
    mode: 0,
    lock: "",
    lockLimit: 4,
    clearLockOnError: true
  };

  constructor(props) {
    super(props);

    this.state = {
      lock: RNLockScreen.defaultProps.lock,
      state: HeaderFragment.State.Default
    };
  }

  _renderHeaderFragment() {
    let {
      defaultState,
      reenterState,
      successState,
      errorState,
      headerFragmentProps,
      backgroundImage,
      renderHeaderFragment,
      lockLimit,
      type
    } = this.props;

    if (renderHeaderFragment) return renderHeaderFragment();

    let dots = 0;
    if (this.state.lock !== RNLockScreen.defaultProps.lock) {
      dots = this.state.lock.length;
    }
    let enableDots = type === 0 ? true : false;

    let separator, containerProps;

    if (backgroundImage) {
      containerProps = style.transparentContainer;
    } else {
      separator = this._renderSeparator();
    }

    return (
      <View style={{ flex: 1 }}>
        <HeaderFragment
          style={[style.headerContainer, containerProps]}
          enableDots={enableDots}
          dots={dots}
          dotsLimit={lockLimit}
          state={this.state.state}
          defaultState={defaultState}
          reenterState={reenterState}
          successState={successState}
          errorState={errorState}
          {...headerFragmentProps}
        />
        {separator}
      </View>
    );
  }

  _renderSeparator() {
    let { renderSeparator } = this.props;

    if (renderSeparator) return renderSeparator();

    return (
      <View style={[style.separatorContainer]}>
        <SvgUri width={1380} height={35} svgXmlData={watermark} />
      </View>
    );
  }

  _onAdd = pin => {
    let { lockLimit, type } = this.props;
    let { lock, state } = this.state;

    if (lock && lock.length >= lockLimit) {
      if (type === RNLockScreen.Type.Pin) {
        this.refs.toast.show("Passcode Limit Reached");
      }

      return;
    }

    this.setState({
      lock: lock.concat(pin)
    });
  };

  _onRemove = () => {
    let lock = this.state.lock;
    if (lock.length > 0) {
      this.setState({
        lock: lock.substr(0, lock.length - 1)
      });
    }
  };

  _onDone = pin => {
    let { mode, lockLimit, type } = this.props;
    let lock = this.state.lock;

    if (
      type === RNLockScreen.Type.Pin &&
      (lock === undefined || lock.length < lockLimit)
    ) {
      this.refs.toast.show(`Please re-enter ${lockLimit} digit passcode`)

      return;
    }

    if (pin !== undefined && pin !== RNLockScreen.defaultProps.lock) {
      lock = pin;
    }

    if (mode === RNLockScreen.Mode.Capture) {
      this._onCapture(lock);
    } else if (mode === RNLockScreen.Mode.Verify) {
      this._onVerify(lock);
    }
  };

  _onCapture = lock => {
    let { onCapture, type, clearLockOnError } = this.props;

    if (this.state.state === HeaderFragment.State.Default) {
      this.setState({
        primaryLock: lock,
        lock: RNLockScreen.defaultProps.lock,
        state: HeaderFragment.State.Reenter
      });
    } else if (
      this.state.state === HeaderFragment.State.Reenter ||
      this.state.state === HeaderFragment.State.Error ||
      this.state.state === HeaderFragment.State.Success
    ) {
      if (this.state.primaryLock === lock) {
        this.setState({
          state: HeaderFragment.State.Success
        });

        onCapture && onCapture(lock);
      } else {
        if (type === RNLockScreen.Type.Pin)
          this.refs.toast.show("Incorrect Passcode")

        if (type === RNLockScreen.Type.Pattern) {
          this.setState({
            state: HeaderFragment.State.Error,
            lock: RNLockScreen.defaultProps.lock
          });
        } else if (type === RNLockScreen.Type.Pin) {
          this.setState({
            state: HeaderFragment.State.Error
          });

          if (clearLockOnError) {
            setTimeout(() => {
              this.setState({
                lock: "",
                state: HeaderFragment.State.Reenter
              });
            }, 1000)
          }
        }
      }
    }
  };

  _onVerify = capturedLock => {
    let { lock, onVerified, type, clearLockOnError } = this.props;

    let verified;
    if (lock === capturedLock) {
      verified = true;
    } else {
      verified = false;
    }

    if (verified) {
      this.setState({
        state: HeaderFragment.State.Success
      });

      onVerified && onVerified();
    } else {
      if (type === RNLockScreen.Type.Pin) {
        this.refs.toast.show("Incorrect Passcode")
      }

      this.setState({
        state: HeaderFragment.State.Error
      });

      if (clearLockOnError) {
        setTimeout(() => {
          this.setState({
            lock: "",
            state: HeaderFragment.State.Reenter
          });
        }, 1000)
      }
    }
  };

  _renderLockFragment() {
    let {
      pinProps,
      lockFragmentProps,
      mode,
      renderLockFragment,
      backgroundImage,
      type,
      lock
    } = this.props;

    if (renderLockFragment) return renderLockFragment();

    let containerProps = {};
    if (backgroundImage) {
      containerProps = style.transparentContainer;
    }

    if (type === RNLockScreen.Type.Pin) {
      return (
        <PinFragment
          onAdd={this._onAdd}
          onRemove={this._onRemove}
          onDone={this._onDone}
          style={containerProps}
          {...lockFragmentProps}
          {...pinProps}
        />
      );
    } else if (type === RNLockScreen.Type.Pattern) {
      let lock;

      if (this.state.state === HeaderFragment.State.Default) {
        if (mode === RNLockScreen.Mode.Verify) {
          lock = lock;
        } else if (mode === RNLockScreen.Mode.Capture) {
          lock = this.state.primaryLock;
        }
      } else {
        if (mode === RNLockScreen.Mode.Verify) {
          lock = lock;
        } else if (mode === RNLockScreen.Mode.Capture) {
          lock = this.state.primaryLock;
        }
      }

      return (
        <PatternFragment
          onAdd={this._onAdd}
          onRemove={this._onRemove}
          onDone={this._onDone}
          clear={
            this.state.state === HeaderFragment.State.Default ? false : true
          }
          lock={lock}
          style={containerProps}
          {...lockFragmentProps}
        />
      );
    }
  }

  render() {
    let { backgroundImage } = this.props;

    if (backgroundImage) {
      return (
        <ImageBackground
          source={backgroundImage}
          style={[style.container]}
          width={1000}
          height={1000}
        >
          {this._renderHeaderFragment()}
          {this._renderLockFragment()}
          <Toast ref="toast" style={style.toastStyle} textStyle={style.toastTextStyle} />
        </ImageBackground>
      );
    } else {
      return (
        <View style={[style.container]}>
          {this._renderHeaderFragment()}
          {this._renderLockFragment()}
          <Toast ref="toast" style={style.toastStyle} textStyle={style.toastTextStyle} />
        </View>
      );
    }
  }
}

export { RNLockScreen }