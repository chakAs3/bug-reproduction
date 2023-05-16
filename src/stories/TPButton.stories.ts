import type { Meta, StoryObj } from "@storybook/vue3";

import TPButton, { ButtonFill, ButtonSize, IconPosition } from "../components/TPButton/TPButton.vue";
import AppsIcon from './assets/icons/AppsIcon.vue';
import Theme from "../types/Theme";
import Variant from "../types/Variant";

const meta: Meta<typeof TPButton> = {
  title: 'Components/TPButton',
  component: TPButton,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['primary', 'secondary', 'secondary-alt', 'tertiary', 'tertiary-alt', 'success', 'error', 'warning'],
      control: { type: 'radio' }
    },
    fill: {
      options: ['solid', 'outline', 'semibold', 'ghost'],
      control: { type: 'radio' }
    },
    icon: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  },
};

export default meta;

type Story = StoryObj<typeof TPButton>;

export const OnlyText: Story = {
  argTypes: meta.argTypes,
  args: {
    theme: Theme.Light,
    variant: Variant.Primary,
    fill: ButtonFill.Solid,
    icon: IconPosition.Left,
    size: ButtonSize.Large
  },
  render: (args) => {
    return {
      components: { TPButton },
      template: `
        <TPButton :theme="theme" :variant="variant" :fill="fill" :icon="icon" :size="size">
          <template #default>
            Button Label
          </template>
        </TPButton>
      `,
      props: args,
    };
  },
};

export const OnlyIcon: Story = {
  argTypes: meta.argTypes,
  args: {
    theme: Theme.Light,
    variant: Variant.Primary,
    fill: ButtonFill.Solid,
    icon: IconPosition.Left,
    size: ButtonSize.Large
  },
  render: (args) => {
    return {
      components: { TPButton, AppsIcon },
      template: `
        <TPButton :theme="theme" :variant="variant" :fill="fill" :icon="icon" :size="size">
          <template #icon>
            <AppsIcon />
          </template>
        </TPButton>
      `,
      props: args,
    };
  },
};

export const WithIcon: Story = {
  argTypes: meta.argTypes,
  args: {
    theme: Theme.Light,
    variant: Variant.Primary,
    fill: ButtonFill.Solid,
    icon: IconPosition.Left,
    size: ButtonSize.Large
  },
  render: (args) => {
    return {
      components: { TPButton, AppsIcon },
      template: `
        <TPButton :theme="theme" :variant="variant" :fill="fill" :icon="icon" :size="size">
          <template #icon>
            <AppsIcon />
          </template>
          <template #default>
            Button Label
          </template>
        </TPButton>
      `,
      props: args,
    };
  },
};