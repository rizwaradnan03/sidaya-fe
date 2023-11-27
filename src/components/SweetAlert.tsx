import React from 'react';
import Swal from 'sweetalert2';

interface SweetAlertProps {
  icon: any;
  title: any;
  text: any;
}

const SweetAlert: React.FC<SweetAlertProps> = ({ icon, title, text }) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text
  });

  return null;
};

export default SweetAlert;
