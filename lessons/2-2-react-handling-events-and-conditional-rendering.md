![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React | Handling Events & Conditional Rendering


## [React | 6. Handling Events](https://reactjs.org/docs/handling-events.html)


Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

- React events are named using camelCase
- With JSX you pass a function as the event handler

**Examples**
```jsx
<button onClick={myFunctionToTrigger}>
  Activate Lasers
</button>
```

```jsx
{/* Call of the deleteRow method */}
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

{/* The same with binding  */}
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

#### List of events

Event Types | Event Names
-- | --
Clipboard Events | `onCopy` `onCut` `onPaste`
Composition Events | `onCompositionEnd` `onCompositionStart` `onCompositionUpdate`
Keyboard Events | `onKeyDown` `onKeyPress` `onKeyUp`
Focus Events | `onFocus` `onBlur`
Form Events | `onChange` `onInput` `onInvalid` `onSubmit`
Mouse Events | `onClick` `onContextMenu` `onDoubleClick` `onDrag` `onDragEnd` `onDragEnter` `onDragExit` `onDragLeave` `onDragOver` `onDragStart` `onDrop` `onMouseDown` `onMouseEnter` `onMouseLeave` `onMouseMove` `onMouseOut` `onMouseOver` `onMouseUp`
Selection Events | `onSelect`
Touch Events | `onTouchCancel` `onTouchEnd` `onTouchMove` `onTouchStart`
UI Events | `onScroll`
Wheel Events | `onWheel`
Media Events | `onAbort` `onCanPlay` `onCanPlayThrough` `onDurationChange` `onEmptied` `onEncrypted` `onEnded` `onError` `onLoadedData` `onLoadedMetadata` `onLoadStart` `onPause` `onPlay` `onPlaying` `onProgress` `onRateChange` `onSeeked` `onSeeking` `onStalled` `onSuspend` `onTimeUpdate` `onVolumeChange` `onWaiting`
Image Events | `onLoad` `onError`
Animation Events | `onAnimationStart` `onAnimationEnd` `onAnimationIteration`
Transition Events | `onTransitionEnd`
Other Events | `onToggle`



## [React | 7. Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)


```javascript
class MyComponent extends React.Component {
  showButton() {
    if (this.props.isLoggedIn)
      return <LogoutButton />
    else 
      return <LoginButton />
  }
  render() {
    let button
    if (this.props.isLoggedIn)
      button = <LogoutButton />
    else 
      button = <LoginButton />
    return (
      <div>
        {/********** Method 1: Variable **********/}
        {button}
        {/********** Method 2: Function **********/}
        {this.showButton()}
        {/********** Method 3: Ternary **********/}
        {this.props.isLoggedIn ? <LogoutButton /> : <LoginButton />}
        {/********** Method 4: Inline If with Logical && Operator **********/}
        {this.props.isLoggedIn && <LogoutButton />}        
        {!this.props.isLoggedIn && <LoginButton />}        
      </div>
    )
  }
}
```

