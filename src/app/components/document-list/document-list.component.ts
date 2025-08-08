import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { Document } from '../../models/document.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
  imports: [CommonModule]
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getDocuments().subscribe((data) => {
      this.documents = data;
    });
  }

  deleteDocument(id: number): void {
    this.documentService.deleteDocument(id).subscribe(() => {
      this.loadDocuments();  // Reload the document list
    });
  }
}
