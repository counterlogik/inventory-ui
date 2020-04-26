import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import EditIcon from '@material-ui/icons/Edit';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LinkIcon from '@material-ui/icons/Link';
import NotesIcon from '@material-ui/icons/Notes';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { GetItemDocument, GetItemQuery, GetItemQueryVariables, Item, Spark } from '../generated/graphql';
import { UpdateItem } from './ItemForm';

interface ViewItemProps extends RouteComponentProps {
  id?: string;
}

export default function ViewItem(props: ViewItemProps) {
  const [underEdit, setUnderEdit] = useState(false);
  const { loading, error, data } = useQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, {
    variables: { where: { id: props.id ? parseInt(props.id) : null } },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return props.id && data && data.item ? (
    <div className='wrapper'>
      {!underEdit ? (
        <div className='details'>
          {data.item.image && <img width='200' src={data.item.image} alt='Upload Preview' />}
          <h4>{data.item.description} [viewing]</h4>
          <div className='detail-row'>{data.item.model && <h5>{data.item.model}</h5>}</div>
          <ButtonGroup color='primary' aria-label='contained primary button group'>
            {Object.values(Spark).map((option, index) => (
              <Button key={option + index} variant={option === data.item.spark ? 'contained' : 'outlined'}>
                {option}
              </Button>
            ))}
          </ButtonGroup>
          <List aria-label='details'>
            <ListItem button>
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary={data.item.count} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={data.item.monetaryValue} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary={data.item.link} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText primary={data.item.notes} />
            </ListItem>
          </List>
          <div className='detail-row'>
            {data.item.categories?.length &&
              data.item.categories.map((category) => (
                <Chip
                  size='small'
                  avatar={<Avatar>{category.title.charAt(0)}</Avatar>}
                  key={category.id}
                  label={category.title}
                />
              ))}
          </div>
          <div className='detail-row'>
            {data.item.locations?.length &&
              data.item.locations.map((location) => (
                <Chip
                  size='small'
                  avatar={<Avatar>{location.title.charAt(0)}</Avatar>}
                  key={location.id}
                  label={location.title}
                />
              ))}
          </div>
          <div className='detail-row'>
            {data.item.tags?.length &&
              data.item.tags.map((tag) => (
                <Chip size='small' avatar={<Avatar>{tag.title.charAt(0)}</Avatar>} key={tag.id} label={tag.title} />
              ))}
          </div>
          <Fab size='medium' color='secondary' aria-label='edit' onClick={() => setUnderEdit(!underEdit)}>
            <EditIcon />
          </Fab>
        </div>
      ) : (
        <UpdateItem item={data.item as Item} removeUnderEdit={() => setUnderEdit(false)} />
      )}
    </div>
  ) : (
    <p>No item found, sending you back for now!</p>
  );
}
