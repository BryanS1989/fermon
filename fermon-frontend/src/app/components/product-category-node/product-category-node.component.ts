import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-category-node',
  templateUrl: './product-category-node.component.html',
  styleUrls: ['./product-category-node.component.scss']
})
export class ProductCategoryNodeComponent implements OnInit {

  @Input() depth : number = 0;
  @Input() item : any = {};

  @Output() selectedCategory : EventEmitter<any[]> = new EventEmitter();

  expandIcon = faCaretRight;
  collapseIcon = faCaretDown;
  iconToShow : any = this.expandIcon;

  pathSelected : any[] = [];

  marginExp : number = 0;

  constructor() { }

  ngOnInit(): void {
    this.marginExp = (this.depth / 10) + 2;

    this.setItemIcon();
  }

  setItemIcon () : void {
    if (!this.item.children) {
      this.iconToShow = this.expandIcon;
    } else if (this.item.children && !this.item.showChildren) {
      this.iconToShow = this.expandIcon;
    } else if (this.item.children && this.item.showChildren) {
      this.iconToShow = this.collapseIcon;
    }
  }
  setSelectedCategory(category : any[]) {
    category.unshift({
      id : this.item.id,
      title : this.item.title
    });
    this.selectedCategory.emit(category);
  }

  selectCategory() : void {
    this.pathSelected.unshift({
      id : this.item.id,
      title : this.item.title
    });
    this.selectedCategory.emit(this.pathSelected);
    this.pathSelected = [];

    if (this.item.children) {
      this.toggleChildren();
    }
  }

  toggleChildren() : void {
    this.item.showChildren = !this.item.showChildren;

    this.setItemIcon();
  }

}
