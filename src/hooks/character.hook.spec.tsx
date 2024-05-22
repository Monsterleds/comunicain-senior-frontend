import { render } from '@testing-library/react' 

import { Character } from '../pages/Characters'
import CharacterProvider from './character.hook'
import ItemList from './../pages/Characters/components/ItemList'

const character:Character = {
    name: 'Luke Skywalker',
    height: '172' 
}

describe('list of characters', () => {
    it('should display the name and height and verify if provider works', () => {
        const wrapper = render(<CharacterProvider><ItemList character={character}/></CharacterProvider>)
        
        const heightCharacterConverted = `${+character.height / 100}m`

        const nameText = wrapper.getByText(character.name)
        const heightText = wrapper.getByText(heightCharacterConverted)

        expect(nameText).toBeInTheDocument()
        expect(heightText).toBeInTheDocument()
    })
})