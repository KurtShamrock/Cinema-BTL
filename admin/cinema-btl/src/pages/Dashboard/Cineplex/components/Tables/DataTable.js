import ReactDatatable from '@ashvin27/react-datatable';
import { orderBy } from 'lodash';
import React, { useState, useRef } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeCineplex } from '../../../../../redux/actions/cineplexActions';
import ModalForm from '../Modals/Modal';
import './styles.scss';
import Alert from '../../../../../services/Alert';

function DataTable(props) {
  const { cineplexs } = props;
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const columns = [
    {
      key: 'id',
      text: 'ID',
      sortable: true,
      cell: (cineplex, index) => {
        return index + 1;
      },
    },
    {
      key: 'image',
      text: 'Image',
      sortable: true,
      cell: (cineplex) => {
        return <Image src={cineplex.image} width={120}></Image>;
      },
    },
    {
      key: 'name',
      text: 'Name',
      sortable: true,
      width: 300,
    },
    {
      key: 'address',
      text: 'Address',
      sortable: true,
    },
    {
      key: 'googleMaps',
      text: 'Google Maps',
      cell: (cineplex) => {
        return (
          <iframe
            className="embed-responsive-item"
            title={cineplex.name}
            allowFullScreen
            loading="lazy"
            src={cineplex.googleMapsUrl}
          />
        );
      },
    },
    {
      key: 'action',
      text: 'Action',
      cell: (cineplex) => {
        return (
          <Button className="button-trash" onClick={() => handleDelete(cineplex.id)}>
            <i className="bx bxs-trash-alt"></i>
          </Button>
        );
      },
    },
  ];

  const config = {
    page_size: 10,
    show_filter: false,
    show_length_menu: false,
    show_pagination: true,
    pagination: 'advance',
  };

  const deleteCineplex = (id) => {
    dispatch(removeCineplex(id));
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
    handleDialog('Are you sure you want to delete?', true, 'Cineplex');
    idRow.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      deleteCineplex(idRow.current);
      handleDialog('', false);
    } else {
      handleDialog('', false);
    }
  };

  return (
    <>
      {isShow ? (
        <ModalForm isShow={isShow} data={data} method="eidt" title="Edit Cineplex" />
      ) : (
        ''
      )}
      <ReactDatatable
        responsive
        hover
        config={config}
        records={cineplexs}
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
