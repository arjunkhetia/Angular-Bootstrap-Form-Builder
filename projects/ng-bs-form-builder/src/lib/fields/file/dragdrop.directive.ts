import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[libDragdrop]'
})
export class DragdropDirective {

  @HostBinding('style.border') private border = '2px dashed #c0c4c7';
  @HostBinding('style.opacity') private opacity = '1';
  @Output() onFileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver(event: any){
    event.preventDefault();
    event.stopPropagation();
    this.border = '2px solid darkblue';
    this.opacity = '0.8';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: any){
    event.preventDefault();
    event.stopPropagation();
    this.border = '2px dashed #c0c4c7';
    this.opacity = '1';
  }

  @HostListener('drop', ['$event']) public onDrop(event: any){
    event.preventDefault();
    event.stopPropagation();
    this.border = '2px dashed #c0c4c7';
    this.opacity = '1';
    let files = event.dataTransfer.files;
    if(files.length > 0){
      this.onFileDropped.emit(files);
    }
  }

  constructor() { }

}
