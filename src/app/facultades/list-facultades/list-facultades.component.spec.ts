import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacultadesComponent } from './list-facultades.component';

describe('ListVehiculosComponent', () => {
  let component: ListFacultadesComponent;
  let fixture: ComponentFixture<ListFacultadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFacultadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFacultadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
