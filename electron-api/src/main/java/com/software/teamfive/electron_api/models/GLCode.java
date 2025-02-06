package com.software.teamfive.electron_api.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name="DB_GLCodes")
public class GLCode {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private Long value;
    private String description;

    @JsonCreator
    public GLCode(String name, Long value, String description) {
        this.name = name;
        this.value = value;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "GLCode{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", value=" + value +
                ", description='" + description + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GLCode glCode = (GLCode) o;
        return Objects.equals(name, glCode.name) && Objects.equals(value, glCode.value) && Objects.equals(description, glCode.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, value, description);
    }
}
