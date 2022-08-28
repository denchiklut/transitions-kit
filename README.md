## TransitionsKit
A set of predefined transition components build on top of `react-transition-gorup`
Implementation is based on Mui source code.

### See the  [demo](https://denchiklut.github.io/transitions-kit)

## Usage example

##### Fade:
```jsx
<Fade in={open}>
    content
</Fade>
```

##### Slide:
```jsx 
<Slide direction='up' in={checked} container={containerRef.current}>
    content
</Slide>
```

##### Grow:
```jsx
<Grow in={open} timeout={500}>
    content
</Grow>

```

##### Collapse:
```jsx
<Collapse in={open} unmountOnExit>
    content
</Collapse>
```

##### Blur:
```jsx 

<Blur in={open} timout={500}>
    <img src='https://picsum.photos/400' />
</Blur>
```
