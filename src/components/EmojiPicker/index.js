import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import { PickerContainer } from './styles';

import { useChatContext } from '../../contexts/CurrentChat';

export default function EmojiPicker() {
  const { handleSelectedEmoji } = useChatContext();

  const handleSelect = (emoji) => {
    handleSelectedEmoji(emoji.native);
  };

  return (
    <PickerContainer>
      <Picker
        set="apple"
        theme="dark"
        style={{ width: '100%', height: '50%' }}
        onSelect={(emoji) => handleSelect(emoji)}
      />
    </PickerContainer>
  );
}
