import React, { useReducer } from 'react';
import { addOne, applyNumber, changeOperation, clearTotal, addMemory, memoryTotal, clearMemory } from './actions/index'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';