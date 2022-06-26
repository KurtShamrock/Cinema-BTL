import ReactDatatable from '@ashvin27/react-datatable';
import { orderBy } from 'lodash';
import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ModalForm from '../../components/Modals/Modal';
import moment from 'moment';
import './styles.scss';
import { removeShowtime } from '../../../../../redux/actions/showtimeActions';
import Alert from '../../../../../services/Alert';

function DataTable(props) {
  const { showtimes, cineplexs } = props;
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const columns = [
    {
      key: 'id',
      text: 'ID',
      sortable: true,
      cell: (showtime, index) => {
        return index + 1;
      },
    },
    {
      key: 'date',
      text: 'Date',
      sortable: true,
      cell: (showtime) => {
        return moment(showtime?.start_time).format('DD/MM/YYYY');
      },
    },
    {
      key: 'start_time',
      text: 'Start Time',
      sortable: true,
      cell: (showtime) => {
        return moment(showtime?.start_time).format('HH:mm A');
      },
    },
    {
      key: 'end_time',
      text: 'End Time',
      sortable: true,
      cell: (showtime) => {
        return moment(showtime?.end_time).format('HH:mm A');
      },
    },
    {
      key: 'cinema',
      text: 'Cinema',
      sortable: true,
      cell: (showtime) => {
        return showtime?.Cinema.name;
      },
    },
    {
      key: 'type',
      text: 'Type',
      sortable: true,
      cell: (showtime) => {
        return showtime?.Cinema.CinemaType.name;
      },
    },
    {
      key: 'cineplex',
      text: 'Cineplex',
      sortable: true,
      cell: (showtime) => {
        return showtime?.Cinema.Cineplex.name;
      },
    },
    {
      key: 'price',
      text: 'Price',
      sortable: true,
      cell: (showtime) => {
        return showtime?.price.toLocaleString('it-IT', {
          style: 'currency',
          currency: 'VND',
        });
      },
    },
    {
      key: 'action',
      text: 'Action',
      cell: (showtime) => {
        return (
          <Button className="button-trash" onClick={() => handleDelete(showtime.id)}>
            <i className="bx bxs-trash-alt"></i>
          </Button>
        );
      },
    },
  ];

  const config = {
    page_size: 30,
    show_filter: false,
    show_length_menu: false,
    show_pagination: true,
    pagination: 'advance',
  };

  const deleteShowtime = (id) => {
    dispatch(removeShowtime(id));
  };

  const onSort = (column, records, sortOrder) => {
    return orderBy(records, [column], [sortOrder]);
  };

  const rowClickedHandler = (event, data, rowIndex) => {
    setData(data);
    setIsShow((isShow) => !isShow);
  };

  //You can put all product information into diaglog
  const [dialog, setDialog] = useState({
    message: '',
    isLoading: false,
    //Update
    nameProduct: '',
  });
  const idRow = useRef();
  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      //Update
      nameProduct,
    });
  };

  const handleDelete = (id) => {
    //Update
    setIsShow((isShow) => !isShow);
    handleDialog('Are you sure you want to delete?', true, 'Showtime');
    idRow.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      deleteShowtime(idRow.current);
      handleDialog('', false);
    } else {
      handleDialog('', false);
    }
  };

  return (
    <>
      {isShow ? (
        <ModalForm
          cineplexs={cineplexs}
          isShow={isShow}
          data={data}
          method="eidt"
          title="Edit Showtime"
        />
      ) : (
        ''
      )}
      <ReactDatatable
        responsive
        hover
        config={config}
        records={showtimes}
        columns={columns}
        onSort={onSort}
        onRowClicked={rowClickedHandler}
      />
      {dialog.isLoading && (
        <Alert
          //Update
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </>
  );
}

export default DataTable;
