import { Component } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, ModalModule, RowComponent, TextColorDirective } from '@coreui/angular';
import { cilPenAlt, cilPlus, cilTrash, cilUserPlus } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { DocsCalloutComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-usuariolist',
  standalone: true,
  imports: [IconDirective, RowComponent, ColComponent, DocsCalloutComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ButtonDirective, ModalModule],
  templateUrl: './usuariolist.component.html',
  styleUrl: './usuariolist.component.scss'
})
export class UsuariolistComponent {
  icons = { cilPlus, cilUserPlus, cilPenAlt, cilTrash};
}
