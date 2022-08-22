## TransitionsKit
A set of predefined transition components build on top of `react-transition-gorup`

### See the  [demo](https://denchiklut.github.io/transitions-kit)

## Usage example
##### Blur:
```jsx 

<Blur in={open} timout={500}>
    <img src='https://picsum.photos/400' />
</Blur>
```

##### Collapse:
```jsx
<Collapse in={open} unmountOnExit>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio
        dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis
        porro possimus recusandae repellat sequi similique.
    </p>
</Collapse>
```

##### Fade:
```jsx
<Fade in={open}>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad distinctio
        dolorem maiores necessitatibus nemo rerum sit ullam vel. Incidunt, ipsum maiores omnis
        porro possimus recusandae repellat sequi similique.
    </p>
</Fade>
```
