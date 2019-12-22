import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

const buttonStories = storiesOf('Button', module);

buttonStories.add('Default button', () => <Button>Test</Button>);
