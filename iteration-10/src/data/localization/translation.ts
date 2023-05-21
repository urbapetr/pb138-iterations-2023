import { csPhraseAndText } from './texts/cs';
import { enPhraseAndText } from './texts/en';
import { dePhraseAndText } from './texts/de';
import { PhraseAndText } from './phrase';

export type Language = 'Cs' | 'En' | 'De';

export const Translation: Record<Language, PhraseAndText> = {
  Cs: csPhraseAndText,
  En: enPhraseAndText,
  De: dePhraseAndText,
};
