import React from 'react';
import Chip from '@material-ui/core/Chip';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { ItemIdTitleCompoundVariables } from '../interfaces/helper-interfaces';

type ChipsCollectionInputProps = {
  optionsType: string;
  existingEntryOptions: ItemIdTitleCompoundVariables[];
  selectedEntries: ItemIdTitleCompoundVariables[];
  disconnectEntries: ItemIdTitleCompoundVariables[];
  setSelectedEntries: (
    value: React.SetStateAction<ItemIdTitleCompoundVariables[]> | ItemIdTitleCompoundVariables[],
  ) => {};
  setDisconnectEntries: (
    value: React.Dispatch<React.SetStateAction<ItemIdTitleCompoundVariables[]>> | ItemIdTitleCompoundVariables[],
  ) => void;
};

export const ChipsCollectionInput: React.FC<ChipsCollectionInputProps> = ({
  optionsType,
  existingEntryOptions = [],
  selectedEntries,
  disconnectEntries,
  setSelectedEntries,
  setDisconnectEntries,
}) => {
  return (
    <Autocomplete
      multiple
      id='tags-filled'
      filterSelectedOptions
      options={existingEntryOptions.map((existingEntryOption) => existingEntryOption.title)}
      value={selectedEntries.map((selectedEntry) => selectedEntry.title)}
      freeSolo
      placeholder='add tags here'
      renderTags={(connectedEntries, getTagProps) =>
        connectedEntries.map((currentEntryTitle, index) => (
          <Chip
            variant='outlined'
            label={currentEntryTitle}
            {...getTagProps({ index })}
            deleteIcon={<RemoveIcon />}
            onDelete={(event) => {
              event.stopPropagation();
              const oneEntryLess = connectedEntries.filter((entryTitle) => entryTitle !== currentEntryTitle);
              const newSelectedEntries = [...selectedEntries.filter((entry) => oneEntryLess.includes(entry.title))];
              setSelectedEntries(newSelectedEntries);
              // if this is a category that currently exists in the database then set it for disconnection from this Item
              if (
                existingEntryOptions &&
                existingEntryOptions.find(
                  (existingEntryOptionByUser) => existingEntryOptionByUser.title === currentEntryTitle,
                ) &&
                !disconnectEntries.find((disconnectEntry) => disconnectEntry.title === currentEntryTitle)
              ) {
                setDisconnectEntries([...disconnectEntries, { id: 1, title: currentEntryTitle }]);
              }
            }}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} placeholder={`+ ${optionsType}`} variant='outlined' margin='dense' />
      )}
      onChange={(event, value: string[], reason: string) => {
        event.preventDefault();
        const appendCategoryTitle = value.splice(-1)[0];

        const entryMatch = selectedEntries.map((entry) => entry.title).includes(appendCategoryTitle);

        const userEntryMatch =
          existingEntryOptions && existingEntryOptions.find((entryByUser) => entryByUser.title === appendCategoryTitle);

        if (reason === 'create-option' && !entryMatch && !userEntryMatch) {
          setSelectedEntries([...selectedEntries, { id: 0, title: appendCategoryTitle }]);
        } else if (reason === 'select-option') {
          if (userEntryMatch) {
            setSelectedEntries([...selectedEntries, userEntryMatch]);
            const inDisconnectEntries = disconnectEntries.find(
              (disconnectEntry) => disconnectEntry.title === appendCategoryTitle,
            );
            if (inDisconnectEntries) {
              setDisconnectEntries([
                ...disconnectEntries.filter((disconnectEntry) => disconnectEntry.title !== appendCategoryTitle),
              ]);
            }
          } else {
            setSelectedEntries([
              ...selectedEntries,
              {
                id: 0,
                title: appendCategoryTitle,
              },
            ]);
          }
        }
      }}
    />
  );
};
