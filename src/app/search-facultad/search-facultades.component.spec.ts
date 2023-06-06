import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFacultadesComponent } from './search-facultades.component';

describe('ListVehiculosComponent', () => {
  let component: SearchFacultadesComponent;
  let fixture: ComponentFixture<SearchFacultadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFacultadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFacultadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
