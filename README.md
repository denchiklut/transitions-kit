## TransitionsKit

[![NPM Version](https://img.shields.io/npm/v/transitions-kit)](https://www.npmjs.com/package/transitions-kit) 
[![storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://denchiklut.github.io/transitions-kit) 
[![NPM Downloads](https://img.shields.io/npm/dw/transitions-kit)](https://www.npmjs.com/package/transitions-kit) 
[![GitHub Repo stars](https://img.shields.io/github/stars/denchiklut/transitions-kit)](https://github.com/denchiklut/transitions-kit?tab=readme-ov-file)


A set of predefined transition components build on top of `react-transition-gorup`
Implementation is based on Mui source code.

[![Edit transitions-kit](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/transitions-kit-fr6dgx)

## Installation
 ```
 npm i transitions-kit
 ```
Or via yarn
```
yarn add transitions-kit
```

## Usage example

### Fade, Slide, Collapse, Grow, Blur:

```tsx
import { Fade, Slide, Collapse, Grow, Blur } from 'transitions-kit';
import { useState } from 'react'

export default function() {
  const [open, setOpen] = useState(false)
    
  return (
    <div>
      <button onClick={() => setOpen(!open)}>toggle</button>
      
      <Fade in={open} mountOnEnter unmountOnExit>
        <img src='https://picsum.photos/400' />
      </Fade>
    </div>
    )
}
```

## `<TransitionGroup />`
To animate a component when it is mounted or unmounted, you can use the `<TransitionGroup />` component from `react-transition-group`. As components are added or removed, the in prop is toggled automatically by TransitionGroup.

```tsx
import { Collapse } from 'transitions-kit'
import { TransitionGroup } from 'react-transition-group'
import { useState } from 'react'


const FRUITS = [
  '🍏 Apple',
  '🍌 Banana',
  '🍍 Pineapple',
  '🥥 Coconut',
  '🍉 Watermelon'
];

export default function() {
  const [fruitsInBasket, setFruitsInBasket] = useState(FRUITS.slice(0, 3))

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i))
    
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev])
    }
  }

  const handleRemoveFruit = (item: string) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)])
  }
  
  return (
    <div>
      <button
        disabled={fruitsInBasket.length >= FRUITS.length}
        onClick={handleAddFruit}
      >
        Add fruit to basket
      </button>
    
      <ul>
        <TransitionGroup>
          {fruitsInBasket.map((item) => (
            <Collapse key={item}>
              <li>
                {item}
                <button onClick={() => handleRemoveFruit(item)}>x</button>
              </li>
            </Collapse>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  )
}
```

## Props
To get more information visit the `react-transition-group` Transition [documentation](https://reactcommunity.org/react-transition-group/transition).

| Property       | Type                                                           | Description                                                                                                                                                                                                  |
|----------------|----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| children       | `ReactElement`                                                 | A single child content element.                                                                                                                                                                              |
| in             | `Boolean`                                                      | If true, the component will transition in.                                                                                                                                                                   |
| mountOnEnter   | `Boolean`                                                      | Set to `true` If you want to `"lazy mount"` the component on the first in={true}                                                                                                                             |
| unmountOnExit  | `Boolean`                                                      | Set to `true` if you'd prefer to `unmount` the component after it finishes exiting.                                                                                                                          |
| easing         | `{ enter?: string, exit?: string } \| string`                  | The transition timing function. You may specify a single easing or a object containing enter and exit values                                                                                                 |
| timeout        | `number \| { appear?: number, enter?: number, exit?: number }` | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.                                                                      |
| appear         | `Boolean`                                                      | Perform the enter transition when it first mounts if in is also true. Set this to false to disable this behavior.                                                                                            |
| addEndListener | `Function`                                                     | Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Note: Timeouts are still used as a fallback if provided. |                                                                |                                                                                                                                         |

## Child requirements
- Forward the ref: The transition components require the first child element to forward its ref to the DOM node.
- Single element: The transition components require only one child element (React.Fragment is not allowed).

---

## `<Collapse />`
```tsx
import { Collapse } from 'transitions-kit';
import { useState } from 'react'

export default function() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(!open)}>toggle</button>

      <Collapse in={open} orientation='vertical' collapsedSize='0px'>
        <img src='https://picsum.photos/400' />
      </Collapse>
    </div>
  )
}
```

### Collapse's specific props:
| Property      | Type                     | Description                                                                  |
|---------------|--------------------------|------------------------------------------------------------------------------|
| orientation   | `horizontal \| vertical` | The transition orientation.                                                  |
| collapsedSize | `number \| string`       | The width (horizontal) or height (vertical) of the container when collapsed. |

---

## `<Slide />`
### Slide relative to a container

The Slide component also accepts `container` prop, which is a reference to a DOM node. If this prop is set, the Slide component will slide from the edge of that DOM node.

```tsx
import { Slide } from 'transitions-kit';
import { useState } from 'react'

export default function() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  return (
    <div>
      <button onClick={() => setOpen(!open)}>toggle</button>
    
      <div>
        <p>Show from target</p>
        <div
          ref={ref}
          style={{
            border: '1px solid', overflow: 'hidden',
            height: 200, width: 200, padding: 10,
          }}
        >
          <Slide in={open} direction='right' container={ref.current}>
            <img src='https://picsum.photos/180' />
          </Slide>
        </div>
      </div>
    </div>
  )
}
```

### Slide's specific props:
| Property  | Type                                  | Description                                                                                                      |
|-----------|---------------------------------------|------------------------------------------------------------------------------------------------------------------|
| container | `HTML element \| func`                | An HTML element, or a function that returns one. It's used to set the container the Slide is transitioning from. |
| direction | `'down' \| 'left' \| 'right' \| 'up'` | Direction the child node will enter from.                                                                        |



