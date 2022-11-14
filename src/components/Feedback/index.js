import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isEmojiClicked: false,
  }

  onClickEmoji = () => this.setState({isEmojiClicked: true})

  renderThankyouContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank you!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  renderEmojisContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>

        <ul className="emojis-container">
          {emojis.map(emoji => (
            <li className="emoji-card" key={emoji.id}>
              <img
                className="emoji-image"
                src={emoji.imageUrl}
                alt={emoji.name}
                onClick={this.onClickEmoji}
              />
              <p>{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div className="app-container">
        <div className="feedback-container">
          {isEmojiClicked
            ? this.renderThankyouContainer()
            : this.renderEmojisContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
