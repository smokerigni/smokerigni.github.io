import React from 'react'

class AsyncImage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      loaded: false
    }

    this._onLoad = () => {
      this.setState(() => ({ loaded: true }))
    }
  }

  render () {
    const { className, style, source, placeholder, alt, title } = this.props
    let Layer = {
      position: 'absolute',
      top: '-10px',
      left: '-10px',
      width: 'calc(100% + 20px)',
      display: 'block',
      WebkitFilter: 'blur(3px)',
      filter: 'blur(3px)',
      opacity: this.state.loaded ? 0 : 1
    }

    return (
      <div className={className || ''} style={style || { position: 'relative', overflow: 'hidden' }}>
        {
          placeholder && placeholder.image ? <img
            style={Layer}
            src={placeholder.image}
            alt={'Loading image'} />
          : (placeholder && placeholder.box
            ? <img
              src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style ="background: ${placeholder.box.color}" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 ${placeholder.box.width} ${placeholder.box.height}"></svg>`}
              style={Layer}
              alt={'Loading image'} />
            : <img
              src={'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style ="background: #FFFFFF" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 100 100"></svg>'}
              style={Layer}
              alt={'Loading image'} />
          )
        }
        <img
          style={{ display: 'block' }}
          src={source}
          alt={alt || 'Image'}
          title={title || ''}
          onLoad={this._onLoad} />
      </div>
    )
  }
}

export default AsyncImage
