## TransitionsKit
A set of predefined transition components build on top of `react-transition-gorup`
Implementation is based on Mui source code.

### See the  [demo](https://denchiklut.github.io/transitions-kit)

<img width="200px" src="https://github.com/denchiklut/transitions-kit/blob/main/public/blur.gif?raw=true"/><img width="200px" src="https://github.com/denchiklut/transitions-kit/blob/main/public/slide.gif?raw=true"/>
<img width="200px" src="https://github.com/denchiklut/transitions-kit/blob/main/public/collapse.gif?raw=true"/><img width="200px" src="https://github.com/denchiklut/transitions-kit/blob/main/public/zoom.gif?raw=true"/>


## Usage example

##### Fade:
```jsx
<Fade in={open}>
    <img src='https://picsum.photos/400' />
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
    <img src='https://picsum.photos/400' />
</Grow>

```

##### Collapse:
```jsx
<Collapse in={open} unmountOnExit>
    <img src='https://picsum.photos/400' />
</Collapse>
```

##### Zoom:

```jsx
<Zoom in={open} timout={500}>
    <img src='https://picsum.photos/400' />
</Zoom>
```

##### Blur:
```jsx
<Blur in={open} timout={500}>
    <img src='https://picsum.photos/400' />
</Blur>
```

### Child requirements:
- Forward the ref: The transition components require the first child element to forward its ref to the DOM node.
- Single element: The transition components require only one child element (React.Fragment is not allowed).
