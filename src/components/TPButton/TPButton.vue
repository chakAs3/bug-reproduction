<script lang="ts">
export enum ButtonFill {
  Solid='solid',
  Outline='outline',
  Semibold='semibold',
  Ghost='ghost'
}

export enum IconPosition {
  Left='left',
  Right='right'
}

export enum ButtonContent {
  Text='text',
  Icon='icon',
  Complex='complex'
}

export enum ButtonSize {
  Small='small',
  Medium='medium',
  Large='large'
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import Theme from '../../types/Theme';
import Variant from '../../types/Variant';

const slots = useSlots();

interface Props {
  theme?: Theme,
  variant?: Variant,
  fill?: ButtonFill,
  icon?: IconPosition,
  size?: ButtonSize
}

const props = withDefaults(defineProps<Props>(), {
  theme: Theme.Light,
  variant: Variant.Primary,
  fill: ButtonFill.Solid,
  icon: IconPosition.Left,
  size: ButtonSize.Large
});

const buttonContentClassNameModifier = computed(() => {
  const labelSlotContent = slots.default;
  const iconSlotContent = slots.icon;

  if (labelSlotContent && iconSlotContent) {
    return ButtonContent.Complex;
  } else if (labelSlotContent) {
    return ButtonContent.Text;
  } else if (iconSlotContent) {
    return ButtonContent.Icon;
  } else {
    throw new Error('Button must have a content. Do not you forget to set button text or icon?');
  }
})
</script>

<template>
  <button :class="['button', props.theme, props.variant, props.fill, props.size, buttonContentClassNameModifier]">
    <div v-if="$slots.icon && $slots.default && props.icon === 'left'" class="icon left">
      <slot name="icon"></slot>
    </div>
    <div class="label">
      <slot></slot>
    </div>
    <div v-if="$slots.icon && !$slots.default" class="icon">
      <slot name="icon"></slot>
    </div>
    <div v-if="$slots.icon && $slots.default && props.icon === 'right'" class="icon right">
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }

  &.small {
    border-radius: 4px;
  }

  &.medium {
    border-radius: 6px;
  }

  &.large {
    border-radius: 8px;
  }

  &.solid, &.ghost {
    border: none;
    
    &.text, &.complex {
      &.small {
        padding: 8px;
      }

      &.medium {
        padding: 10px 12px;
      }

      &.large {
        padding: 12px 16px;
      }
    }

    &.icon {
      &.small {
        padding: 8px;
      }

      &.medium {
        padding: 10px
      }

      &.large {
        padding: 12px
      }
    }
  }

  &.outline, &.semibold {
    border-width: 1px;
    border-style: solid;
    
    &.text, &.complex {
      &.small {
        padding: 7px;
      }

      &.medium {
        padding: 9px 11px;
      }

      &.large {
        padding: 11px 15px;
      }
    }

    &.icon {
      &.small {
        padding: 7px;
      }

      &.medium {
        padding: 9px
      }

      &.large {
        padding: 11px
      }
    }
  }

  &.light {
    &.primary {
      &.outline, &.semibold {
        border-color: var(--color-light-primary);
      }

      &.solid {
        background-color: var(--color-light-primary);
      }

      &.outline {
        .label {
          color: var(--color-light-primary);
        }

        .icon {
          fill: var(--color-light-primary);
        }
      }

      &.semibold {
        background-color: var(--color-light-primary-l70);

        .label {
          color: var(--color-light-primary);
        }

        .icon {
          fill: var(--color-light-primary);
        }
      }

      &.ghost {
        .label {
          color: var(--color-light-primary);
        }

        .icon {
          fill: var(--color-light-primary);
        }
      }
    }
    &.secondary {
      &.outline, &.semibold {
        border-color: var(--color-light-secondary);
      }

      &.solid {
        background-color: var(--color-light-secondary);
      }

      &.outline {
        .label {
          color: var(--color-light-secondary);
        }

        .icon {
          fill: var(--color-light-secondary);
        }
      }

      &.semibold {
        background-color: var(--color-light-secondary-l70);

        .label {
          color: var(--color-light-secondary);
        }

        .icon {
          fill: var(--color-light-secondary);
        }
      }

      &.ghost {
        .label {
          color: var(--color-light-secondary);
        }

        .icon {
          fill: var(--color-light-secondary);
        }
      }
    }
    &.secondary-alt {
      &.outline, &.semibold {
        border-color: var(--color-light-secondary-alt);
      }
      
      &.solid {
        background-color: var(--color-light-secondary-alt);
      }

      &.outline {
        .label {
          color: var(--color-light-secondary-alt);
        }

        .icon {
          fill: var(--color-light-secondary-alt);
        }
      }

      &.semibold {
        background-color: var(--color-light-secondary-alt-l70);

        .label {
          color: var(--color-light-secondary-alt);
        }

        .icon {
          fill: var(--color-light-secondary-alt);
        }
      }

      &.ghost {
        .label {
          color: var(--color-light-secondary-alt);
        }

        .icon {
          fill: var(--color-light-secondary-alt);
        }
      }
    }
    &.tertiary {
      &.outline, &.semibold {
        border-color: var(--color-light-tertiary);
      }

      &.solid {
        background-color: var(--color-light-tertiary);
      }

      &.outline {
        .label {
          color: var(--color-light-tertiary);
        }

        .icon {
          fill: var(--color-light-tertiary);
        }
      }

      &.semibold {
        background-color: var(--color-light-tertiary-l70);

        .label {
          color: var(--color-light-tertiary);
        }

        .icon {
          fill: var(--color-light-tertiary);
        }
      }

      &.ghost {
        .label {
          color: var(--color-light-tertiary);
        }

        .icon {
          fill: var(--color-light-tertiary);
        }
      }
    }
    &.tertiary-alt {
      &.outline, &.semibold {
        border-color: var(--color-light-tertiary-alt);
      }

      &.solid {
        background-color: var(--color-light-tertiary-alt);
      }

      &.outline {
        .label {
          color: var(--color-light-tertiary-alt);
        }

        .icon {
          fill: var(--color-light-tertiary-alt);
        }
      }

      &.semibold {
        background-color: var(--color-light-tertiary-alt-l70);

        .label {
          color: var(--color-light-tertiary-alt);
        }

        .icon {
          fill: var(--color-light-tertiary-alt);
        }
      }

      &.ghost {
        .label {
          color: var(--color-light-tertiary-alt);
        }

        .icon {
          fill: var(--color-light-tertiary-alt);
        }
      }
    }
    &.success {
      &.outline, &.semibold {
        border-color: var(--color-light-success);
      }

      &.solid {
        background-color: var(--color-light-success);
      }

      &.outline {
        .label {
          color: var(--color-light-success);
        }

        .icon {
          fill: var(--color-light-success);
        }
      }

      &.semibold {
        background-color: var(--color-light-success-l70);

        .label {
          color: var(--color-light-success);
        }

        .icon {
          fill: var(--color-light-success);
        }
      }

      &.ghost {
        .label {
          color: var(--color-light-success);
        }

        .icon {
          fill: var(--color-light-success);
        }
      }
    }
    &.error {
      &.outline, &.semibold {
        border-color: var(--color-light-error);
      }

      &.solid {
        background-color: var(--color-light-error);
      }

      &.outline {
        .label {
          color: var(--color-light-error);
        }

        .icon {
          fill: var(--color-light-error);
        }
      }

      &.semibold {
        background-color: var(--color-light-error-l70);

        .label {
          color: var(--color-light-error);
        }

        .icon {
          fill: var(--color-light-error);
        }
      }

      &.ghost {
        .label {
          color: var(--color-light-error);
        }

        .icon {
          fill: var(--color-light-error);
        }
      }
    }
    &.warning {
      &.outline, &.semibold {
        border-color: var(--color-light-warning);
      }

      &.solid {
        background-color: var(--color-light-warning);
      }

      &.outline {
        .label {
          color: var(--color-light-warning);
        }

        .icon {
          fill: var(--color-light-warning);
        }
      }

      &.semibold {
        background-color: var(--color-light-warning-l70);

        .label {
          color: var(--color-light-warning);
        }

        .icon {
          fill: var(--color-light-warning);
        }
      }

      &.ghost {
        .label {
          color: var(--color-light-warning);
        }

        .icon {
          fill: var(--color-light-warning);
        }
      }
    }

    &.solid {
      .label {
        color: var(--color-generic-white);
      }

      .icon {
        fill: var(--color-generic-white);
      }
    }

    &.outline, &.ghost {
      background-color: transparent;
    }
  }

  &.small {
    .label {
      font: var(--font-label-primary-xs-semibold);
      line-height: 16px;
    }

    .icon {
      width: 16px;
      height: 16px;

      &.left {
        margin-right: 4px;
      }

      &.right {
        margin-left: 4px;
      }
    }
  }

  &.medium {
    .label {
      font: var(--font-label-primary-s-semibold);
      line-height: 20px;
    }

    .icon {
      width: 20px;
      height: 20px;

      &.left {
        margin-right: 4px;
      }

      &.right {
        margin-left: 4px;
      }
    }
  }

  &.large {
    .label {
      font: var(--font-label-primary-m-semibold);
      line-height: 24px;
    }

    .icon {
      width: 24px;
      height: 24px;

      &.left {
        margin-right: 8px;
      }

      &.right {
        margin-left: 8px;
      }
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

