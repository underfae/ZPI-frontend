import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  elements = [
    {
      name: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
        'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
        'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
        'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
      ],
      expanded: false,
    },
    {
      name: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
        'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
        'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
        'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
      ],
      expanded: false,
    },
    {
      name: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
        'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
        'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
        'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
      ],
      expanded: false,
    },
    {
      name: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
        'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
        'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
        'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
      ],
      expanded: false,
    },
    {
      name: 'Komputerowe przetwarzanie obrazu',
      study: 'Informatyka',
      specialization: 'Grafika komputerowa i Multimedia',
      questions: [
        'Cechy dźwięku: wysokość, barwa, głośność ( także inne: „twardość”, „jasność” „klarowność” itp.) oraz ich związek z parametrami fizycznymi.',
        'Helmholtza teoria percepcji wysokości oraz wrażenia konsonansu i dysonansu.',
        'Pochodzenie i rodzaje skal muzycznych. Strój „naturalny” i równomiernie temperowany.',
        'Formy muzyki europejskiej i ich związek z fizycznymi własnościami dźwięku: organum, polifonia imitacyjna (fuga, a interwał kwinty), forma okresowa, allegro sonatowe.',
      ],
      expanded: false,
    },
  ];

  showMore(): void {}
}
