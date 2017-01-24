
// ui.js
// NOTE: Just normalizing some UI style properties here. (TA)

import tinycolor from 'tinycolor2';
import appTheme from 'universal/styles/theme/appTheme';
import zIndexScale from 'universal/styles/helpers/zIndexScale';

// Reusable constants for UI object
// ---------------------------------

const backgroundColor = tinycolor.mix(appTheme.palette.mid, '#fff', 95).toHexString();

// Small border radius for controls (inputs, buttons, etcs.)
const borderRadiusSmall = '.125rem';
// Medium border radius for grouped components (cards, panels, etc.)
const borderRadiusMedium = '.25rem';
// Large border radius for larger components (modals, pages, etc.)
const borderRadiusLarge = '.5rem';

// Button size constants
const BUTTON_SIZE_SMALLEST = 'smallest';
const BUTTON_SIZE_SMALL = 'small';
const BUTTON_SIZE_MEDIUM = 'medium';
const BUTTON_SIZE_LARGE = 'large';
const BUTTON_SIZE_LARGEST = 'largest';
const BUTTON_PADDING_HORIZONTAL_COMPACT = '.625em';

// ---------------------------------

const ui = {
  // Base settings
  borderRadiusSmall,
  borderRadiusMedium,
  borderRadiusLarge,

  // Action items and cards
  actionCardBgColor: appTheme.palette.light60l,
  actionCardBgActive: 'rgba(255, 255, 255, .85)',
  zActionItem: zIndexScale(6),

  // Avatars
  avatarDefaultBoxShadow: '0 0 1px 1px rgba(0, 0, 0, .2)',

  // Breakpoints
  breakpoint: {
    wide: '@media (min-width: 90rem)',
    wider: '@media (min-width: 100rem)',
    widest: '@media (min-width: 120rem)'
  },

  // Buttons
  buttonBaseStyles: {
    appearance: 'none',
    border: '1px solid transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: 700,
    lineHeight: 'normal',
    outline: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    ':hover': {
      textDecoration: 'none'
    },
    ':focus': {
      textDecoration: 'none'
    },
    ':active': {
      animationDuration: '.1s',
      animationName: {
        '0%': {
          transform: 'translate(0, 0)'
        },
        '50%': {
          transform: 'translate(0, .25rem)'
        },
        '100%': {
          transform: 'translate(0)'
        }
      },
      animationTimingFunction: 'ease-in'
    }
  },
  buttonBlockStyles: {
    display: 'block',
    paddingLeft: BUTTON_PADDING_HORIZONTAL_COMPACT,
    paddingRight: BUTTON_PADDING_HORIZONTAL_COMPACT,
    width: '100%'
  },
  buttonBorderRadius: borderRadiusSmall,
  buttonDisabledStyles: {
    cursor: 'not-allowed',
    opacity: '.5',
    ':hover': {
      opacity: '.5'
    },
    ':focus': {
      opacity: '.5'
    },
    ':active': {
      animation: 'none'
    }
  },
  buttonFontSize: {
    [BUTTON_SIZE_SMALLEST]: appTheme.typography.s2,
    [BUTTON_SIZE_SMALL]: appTheme.typography.s3,
    [BUTTON_SIZE_MEDIUM]: appTheme.typography.sBase,
    [BUTTON_SIZE_LARGE]: appTheme.typography.s4,
    [BUTTON_SIZE_LARGEST]: appTheme.typography.s5
  },
  buttonPaddingHorizontal: '1.125em', // 1.5em
  buttonPaddingHorizontalCompact: BUTTON_PADDING_HORIZONTAL_COMPACT, // .75em
  buttonPaddingVertical: '.625em', // .75em
  buttonSizes: [
    BUTTON_SIZE_SMALLEST,
    BUTTON_SIZE_SMALL,
    BUTTON_SIZE_MEDIUM,
    BUTTON_SIZE_LARGE,
    BUTTON_SIZE_LARGEST
  ],
  buttonColorPalette: [
    'cool',
    'warm',
    'dark',
    'mid',
    'light',
    'white',
    'gray'
  ],

  // Cards
  cardBorderColor: appTheme.palette.mid30l,
  cardBorderRadius: borderRadiusMedium,
  cardMaxWidth: '17.5rem',
  cardMinHeight: '7.5rem',
  cardPaddingBase: '.5rem',
  cardDragStyle: {
    backgroundColor: appTheme.palette.light10l,
    borderColor: appTheme.palette.mid70l,
    borderRadius: borderRadiusMedium,
    boxShadow: '0 1px 2px rgba(0, 0, 0, .15)'
  },
  zCard: zIndexScale(6),

  // Dashboards
  dashActionsWidth: '15rem',
  dashAgendaWidth: '15.125rem',
  dashBackgroundColor: backgroundColor,
  dashBorderColor: 'rgba(0, 0, 0, .1)',
  dashGutter: '1rem',
  // Note: property 'dashMinWidth' prevents layout from collapsing in Safari
  //       in a better future we may be more adaptive/responsive (TA)
  dashMinWidth: '79rem',
  dashSectionHeaderLineHeight: '2rem',
  dashSidebarWidth: '15rem',

  // Email
  emailBackgroundColor: backgroundColor,
  emailFontFamily: '"Karla", "Helvetica Neue", serif',
  emailRuleColor: appTheme.palette.mid20l,
  emailTableBase: {
    borderCollapse: 'collapse',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  // Fields
  fieldLabelGutter: '.5rem',
  fieldPaddingHorizontal: '.75rem',

  // Icons
  iconSize: '14px', // FontAwesome base
  iconSizeAvatar: '21px', // FontAwesome 1.5x
  iconSize2x: '28px', // FontAwesome 2x
  iconSize3x: '42px', // FontAwesome 3x

  // Meeting
  meetingSidebarWidth: '15rem',

  // Menus
  menuBackgroundColor: backgroundColor,
  zMenu: zIndexScale(4),

  // Modals
  modalBorderRadius: borderRadiusLarge,
  modalBoxShadow: '0 .25rem .5rem 0 rgba(0, 0, 0, .35)',

  // Panels
  panelBorderColor: appTheme.palette.mid40l,
  panelBorderRadius: borderRadiusMedium,
  panelGutter: '1rem',

  // Project columns
  projectColumnsMaxWidth: '78.25rem',
  projectColumnsMinWidth: '48rem',

  // Rows
  rowBorderColor: appTheme.palette.mid20l,
  rowHeadingColor: appTheme.palette.dark,
  rowHeadingFontSize: appTheme.typography.s4,
  rowGutter: '1rem',

  // Generic zIndex scale
  z1: zIndexScale(1),
  z2: zIndexScale(2),
  z3: zIndexScale(4),
  z5: zIndexScale(5),
  z6: zIndexScale(6),
  z7: zIndexScale(7),
  z8: zIndexScale(8),
  z9: zIndexScale(9),
  z10: zIndexScale(10)
};

export default ui;
