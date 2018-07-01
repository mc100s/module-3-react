
// The Button Component for iteration 1
class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  
  getClassName() {
    let res = 'button';
    if (this.props.className)
    res += ' ' + this.props.className;
    let correspondances = {
      isActive: 'is-active',
      isBlack: 'is-black',
      isCentered: 'is-centered',
      isDanger: 'is-danger',
      isDark: 'is-dark',
      isFocused: 'is-focused',
      isGrouped: 'is-grouped',
      isHovered: 'is-hovered',
      isInfo: 'is-info',
      isInverted: 'is-inverted',
      isLarge: 'is-large',
      isLight: 'is-light',
      isLink: 'is-link',
      isLoading: 'is-loading',
      isMedium: 'is-medium',
      isOutlined: 'is-outlined',
      isPrimary: 'is-primary',
      isRight: 'is-right',
      isRounded: 'is-rounded',
      isSelected: 'is-selected',
      isSmall: 'is-small',
      isStatic: 'is-static',
      isSuccess: 'is-success',
      isText: 'is-text',
      isWarning: 'is-warning',
      isWhite: 'is-white',
    };
    for (const key in correspondances) {
      if (this.props[key]) {
        res += ' ' + correspondances[key];
      }
    }
    return res;
  }
  
  render() {
    return (
      <button className={this.getClassName()} onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}