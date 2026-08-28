import '@interface-library/css/styles.css';
import './preview.css';

const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    options: {
      storySort: {
        order: [
          'Foundations',
          'Layout',
          ['Container', 'Stack', 'SplitLayout', 'BorderGrid', 'Divider'],
          'Components',
          [
            'ActionLink',
            'Button',
            'FormField',
            'Checkbox',
            'StatusMessage',
            'InlineNav',
            'ContentCard',
            'IndexList',
            'SectionHeader',
            'CallToAction',
          ],
        ],
      },
    },
  },
};

export default preview;
