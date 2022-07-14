import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ProyectoComponent } from '../proyecto/proyecto.component';
import { ProgramaService } from '../../../../providers/services/programa.service';
import { TallerService } from '../../../../providers/services/taller.service';
import { ProyectoService } from '../../../../providers/services/proyecto.service';
import { ProyectoServiceDelete } from '../../../../providers/services/proyecto-delete.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any[] = [];


  constructor(
    private proyectoService: ProyectoService,
    private proyectoDeleteService: ProyectoServiceDelete,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }



  getProyectos(): void {
    this.proyectoService.getAll$().subscribe(response => {
      console.log(response);
      this.proyectos = response.data || [];
    });
  }

  openModal(): any {
    const modal = this.modalService.open(ProyectoComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = 'Nuevo';
    modal.result.then(res => {
      if (res.success) {
        // @ts-ignore
        Swal.fire({
          title: 'Taller',
          text: `${res.message}`,
          icon: 'success',
          confirmButtonColor: '#7f264a',
          timer: 1500
        });
        this.getProyectos();
      }
    }).catch(res => {
    });
  }

  openModalEdit(item: any): any {
    const modal = this.modalService.open(ProyectoComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.id_taller = item.id_taller;
    modal.componentInstance.item = item;
    modal.componentInstance.title = 'Modificar';
    modal.result.then(res => {
      if (res.success) {
        this.getProyectos();
        Swal.fire({
          title: 'Taller',
          text: `${res.message}`,
          icon: 'success',
          confirmButtonColor: '#7f264a',
          timer: 1500
        });
      }
    }).catch(res => {
    });
  }

  public onDelete(item: any): void {
    const ID = item.idTaller;
    const mensaje = '¿ Desea eliminar? : ' + ' ' + item.nombre;
    if (ID) {
      Swal.fire({
        title: 'Se eliminará el registro',
        text: `${mensaje}`,
        backdrop: true,
        //animation: true,
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#7f264a',
        confirmButtonText: 'Estoy de acuerdo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.proyectoDeleteService.delete$(ID).subscribe(data => {
            if (data.success) {
              Swal.fire({
                title: 'Eliminado',
                text: data.message,
                backdrop: true,
                //animation: true,
                showConfirmButton: false,
                confirmButtonColor: '#7f264a',
                timer: 1500,
              });
              this.getProyectos();
            }
          });
        }
      });
    }
  }


}





